# SJM Holdings 官网 — 生产环境部署文档

| 项目 | 信息 |
|------|------|
| 项目名称 | cd-sjm-holdings |
| 技术栈 | Next.js 16.1.6 / React 19.2.3 / Tailwind CSS 4 |
| 运行时 | Node.js |
| 默认端口 | 3000 |
| 文档版本 | v1.0 |
| 更新日期 | 2026-03-03 |

---

## 目录

1. [系统要求](#1-系统要求)
2. [目录结构说明](#2-目录结构说明)
3. [部署步骤](#3-部署步骤)
4. [Nginx 反向代理配置](#4-nginx-反向代理配置)
5. [HTTPS 证书配置](#5-https-证书配置)
6. [进程管理](#6-进程管理)
7. [日志管理](#7-日志管理)
8. [健康检查与监控](#8-健康检查与监控)
9. [更新与回滚](#9-更新与回滚)
10. [安全加固](#10-安全加固)
11. [故障排查](#11-故障排查)
12. [附录](#附录)

---

## 1. 系统要求

| 资源 | 最低要求 | 推荐配置 |
|------|---------|---------|
| 操作系统 | CentOS 7+ / Ubuntu 20.04+ / Debian 11+ | Ubuntu 22.04 LTS |
| CPU | 1 核 | 2 核+ |
| 内存 | 1 GB | 2 GB+ |
| 磁盘 | 10 GB | 20 GB+ SSD |
| Node.js | >= 18.18.0 | 20.x LTS |
| pnpm | >= 9.0.0 | 最新版 |
| Nginx | >= 1.18 | 最新稳定版 |
| PM2 | >= 5.0 | 最新版 |

### 端口要求

| 端口 | 用途 | 说明 |
|------|------|------|
| 80 | HTTP | Nginx 监听 |
| 443 | HTTPS | Nginx 监听（启用 SSL 时） |
| 3000 | 应用服务 | 仅绑定 127.0.0.1，不对外暴露 |

---

## 2. 目录结构说明

```
/var/www/cd-sjm-holdings/         # 项目根目录（建议路径）
├── app/                          # Next.js App Router 页面
├── public/                       # 静态资源
├── .next/                        # 构建产物（pnpm build 生成）
├── node_modules/                 # 依赖包（pnpm install 生成）
├── package.json                  # 项目配置
├── next.config.mjs               # Next.js 配置
└── deploy.sh                     # 部署脚本（见第 9 节）
```

---

## 3. 部署步骤

### 3.1 安装 Node.js

```bash
# 使用 nvm 安装（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm alias default 20

# 验证
node -v   # 预期输出 v20.x.x
```

### 3.2 安装 pnpm

```bash
# 使用 corepack 启用（Node.js >= 16.13 内置，推荐）
corepack enable
corepack prepare pnpm@latest --activate

# 或使用独立安装脚本
# curl -fsSL https://get.pnpm.io/install.sh | sh -

# 验证
pnpm -v
```

### 3.3 安装 PM2

```bash
pnpm add -g pm2
pm2 -v    # 验证安装
```

### 3.4 安装 Nginx

```bash
# Ubuntu / Debian
sudo apt update && sudo apt install -y nginx

# CentOS / RHEL
sudo yum install -y epel-release && sudo yum install -y nginx

# 启动并设置开机自启
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 3.5 部署应用代码

```bash
# 创建部署目录
sudo mkdir -p /var/www/cd-sjm-holdings
sudo chown -R $USER:$USER /var/www/cd-sjm-holdings

# 上传代码（二选一）

# 方式 A：从 Git 仓库拉取
cd /var/www
git clone <仓库地址> cd-sjm-holdings

# 方式 B：通过 SCP/SFTP 上传发布包
# 在本地打包（排除不需要的目录）：
#   tar czf release.tar.gz --exclude='node_modules' --exclude='.next' --exclude='.git' .
# 上传到服务器后解压：
#   tar xzf release.tar.gz -C /var/www/cd-sjm-holdings
```

### 3.6 安装依赖

```bash
cd /var/www/cd-sjm-holdings
pnpm install --frozen-lockfile --prod
```

> `--frozen-lockfile` 基于 `pnpm-lock.yaml` 精确安装，保证与开发环境一致。`--prod` 跳过开发依赖以减小体积。

### 3.7 构建项目

```bash
pnpm build
```

构建成功后 `.next` 目录将包含所有生产资源。如构建因内存不足失败，参见 [故障排查](#11-故障排查) 章节。

### 3.8 启动服务

```bash
pm2 start pnpm --name "sjm-holdings" -- start
pm2 save
```

验证服务状态：

```bash
pm2 status
curl -I http://127.0.0.1:3000   # 预期返回 HTTP 200
```

---

## 4. Nginx 反向代理配置

### 4.1 创建配置文件

**Ubuntu / Debian：**

```bash
sudo vim /etc/nginx/sites-available/sjm-holdings.conf
```

**CentOS / RHEL：**

```bash
sudo vim /etc/nginx/conf.d/sjm-holdings.conf
```

### 4.2 配置内容

将 `yourdomain.com` 替换为实际域名：

```nginx
upstream sjm_backend {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name yourdomain.com;

    # 安全响应头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # 静态资源缓存（Next.js 构建产物自带哈希，可长期缓存）
    location /_next/static/ {
        proxy_pass http://sjm_backend;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # public 目录下的静态文件
    location /favicon.ico {
        proxy_pass http://sjm_backend;
        expires 30d;
    }

    # 应用路由
    location / {
        proxy_pass http://sjm_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
    }

    # 请求体大小限制
    client_max_body_size 10M;

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;
    gzip_comp_level 5;
}
```

### 4.3 启用配置

```bash
# Ubuntu / Debian 需创建软链接
sudo ln -sf /etc/nginx/sites-available/sjm-holdings.conf /etc/nginx/sites-enabled/

# 测试配置语法
sudo nginx -t

# 重载配置（不中断服务）
sudo systemctl reload nginx
```

---

## 5. HTTPS 证书配置

### 方式 A：使用 Let's Encrypt 免费证书

```bash
# 安装 Certbot
sudo apt install -y certbot python3-certbot-nginx   # Ubuntu
sudo yum install -y certbot python3-certbot-nginx    # CentOS

# 自动申请并配置
sudo certbot --nginx -d yourdomain.com

# 验证自动续期
sudo certbot renew --dry-run
```

Certbot 会自动修改 Nginx 配置，添加 SSL 相关指令并设置 HTTP → HTTPS 重定向。

### 方式 B：使用自有证书

将证书文件放置到安全目录，在 Nginx 中添加：

```nginx
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate     /etc/ssl/certs/yourdomain.com.pem;
    ssl_certificate_key /etc/ssl/private/yourdomain.com.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # ... 其余配置同上 ...
}

server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$host$request_uri;
}
```

---

## 6. 进程管理

### PM2 常用操作

| 操作 | 命令 |
|------|------|
| 查看进程状态 | `pm2 status` |
| 查看详细信息 | `pm2 show sjm-holdings` |
| 重启服务 | `pm2 restart sjm-holdings` |
| 零停机重载 | `pm2 reload sjm-holdings` |
| 停止服务 | `pm2 stop sjm-holdings` |
| 删除进程 | `pm2 delete sjm-holdings` |
| 实时监控面板 | `pm2 monit` |

### 设置开机自启

```bash
pm2 save                  # 保存当前进程列表
pm2 startup               # 生成自启脚本
# 按照输出提示执行 sudo 命令
```

### PM2 配置文件（可选）

如需更精细的控制，在项目根目录创建 `ecosystem.config.js`：

```javascript
module.exports = {
  apps: [{
    name: 'sjm-holdings',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/cd-sjm-holdings',
    instances: 'max',         // 根据 CPU 核数自动分配
    exec_mode: 'cluster',     // 集群模式
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],
};
```

使用配置文件启动：

```bash
pm2 start ecosystem.config.js
pm2 save
```

---

## 7. 日志管理

### 日志位置

| 日志 | 路径 |
|------|------|
| 应用日志（stdout） | `~/.pm2/logs/sjm-holdings-out.log` |
| 应用日志（stderr） | `~/.pm2/logs/sjm-holdings-error.log` |
| Nginx 访问日志 | `/var/log/nginx/access.log` |
| Nginx 错误日志 | `/var/log/nginx/error.log` |

### 查看日志

```bash
pm2 logs sjm-holdings             # 实时查看
pm2 logs sjm-holdings --lines 200 # 查看最近 200 行
```

### 日志轮转

安装 PM2 日志轮转模块，防止日志文件无限增长：

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 50M       # 单文件最大 50MB
pm2 set pm2-logrotate:retain 30          # 保留最近 30 个文件
pm2 set pm2-logrotate:compress true      # 压缩旧日志
```

---

## 8. 健康检查与监控

### 基础健康检查

可通过 crontab 定时检测服务状态：

```bash
crontab -e
```

添加以下内容（每 5 分钟检测一次，失败自动重启）：

```cron
*/5 * * * * curl -sf http://127.0.0.1:3000/ > /dev/null || pm2 restart sjm-holdings >> /var/log/sjm-healthcheck.log 2>&1
```

### PM2 监控

```bash
pm2 monit                   # 终端实时监控面板
pm2 status                  # 查看 CPU / 内存使用
```

### 系统级监控（推荐）

建议接入公司统一监控平台，关注以下指标：

- **应用层**：HTTP 响应状态码、请求延迟、错误率
- **进程层**：PM2 进程状态、CPU 使用率、内存占用
- **系统层**：磁盘使用率、系统负载、网络连通性

---

## 9. 更新与回滚

### 9.1 标准更新流程

在项目根目录创建部署脚本 `deploy.sh`：

```bash
#!/bin/bash
set -e

APP_DIR="/var/www/cd-sjm-holdings"
APP_NAME="sjm-holdings"
BACKUP_DIR="/var/www/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

cd "$APP_DIR"

echo "[$TIMESTAMP] ====== 开始部署 ======"

# 1. 备份当前构建产物
echo "[1/5] 备份当前版本..."
mkdir -p "$BACKUP_DIR"
if [ -d ".next" ]; then
    tar czf "$BACKUP_DIR/build_$TIMESTAMP.tar.gz" .next
    echo "      备份已保存至 $BACKUP_DIR/build_$TIMESTAMP.tar.gz"
fi

# 2. 拉取最新代码
echo "[2/5] 拉取最新代码..."
git pull origin main

# 3. 安装依赖
echo "[3/5] 安装依赖..."
pnpm install --frozen-lockfile --prod

# 4. 构建
echo "[4/5] 构建项目..."
pnpm build

# 5. 重启服务
echo "[5/5] 重启服务..."
pm2 reload "$APP_NAME"

echo "====== 部署完成 ======"
echo "当前进程状态："
pm2 status

# 清理 30 天前的备份
find "$BACKUP_DIR" -name "build_*.tar.gz" -mtime +30 -delete
```

```bash
chmod +x deploy.sh
./deploy.sh
```

### 9.2 回滚操作

如新版本出现问题，可快速回滚：

```bash
APP_DIR="/var/www/cd-sjm-holdings"
BACKUP_DIR="/var/www/backups"

# 查看可用备份
ls -lt $BACKUP_DIR/build_*.tar.gz

# 回滚到指定备份（替换为目标文件名）
cd $APP_DIR
rm -rf .next
tar xzf $BACKUP_DIR/build_20260303_143000.tar.gz
pm2 reload sjm-holdings
```

如使用 Git 管理，也可回退到指定 commit：

```bash
cd /var/www/cd-sjm-holdings
git log --oneline -10           # 查看最近提交
git checkout <commit-hash>      # 切换到目标版本
pnpm install --frozen-lockfile --prod
pnpm build
pm2 reload sjm-holdings
```

---

## 10. 安全加固

### 10.1 系统层面

```bash
# 防火墙仅开放必要端口
sudo ufw allow 22/tcp     # SSH
sudo ufw allow 80/tcp     # HTTP
sudo ufw allow 443/tcp    # HTTPS
sudo ufw enable

# 确保应用端口不对外暴露
sudo ufw deny 3000/tcp
```

### 10.2 Nginx 层面

- 已在配置中添加安全响应头（X-Frame-Options、X-Content-Type-Options 等）
- 限制请求体大小（`client_max_body_size 10M`）
- 建议根据业务需要添加 IP 白名单或速率限制

### 10.3 应用层面

- 使用非 root 用户运行应用
- 项目目录权限设为 `755`（目录）/ `644`（文件）
- 如有敏感配置（API Key 等），使用环境变量管理，不要硬编码在代码中

---

## 11. 故障排查

### 服务无法启动

```bash
pm2 logs sjm-holdings --err --lines 50   # 查看错误日志
node -v                                   # 确认 Node.js 版本 >= 18
ls -la .next/                             # 确认构建产物存在
```

### 端口冲突

```bash
lsof -i :3000         # 查看端口占用
kill -9 <PID>         # 终止占用进程
```

### 构建内存不足

```bash
export NODE_OPTIONS="--max-old-space-size=2048"
pnpm build
```

### 502 Bad Gateway

1. 确认应用进程正在运行：`pm2 status`
2. 确认端口可访问：`curl -I http://127.0.0.1:3000`
3. 检查 Nginx 错误日志：`sudo tail -20 /var/log/nginx/error.log`
4. 检查 Nginx 配置中的 `proxy_pass` 端口是否与应用端口一致

### 页面 404

1. 确认已执行 `pnpm build` 且 `.next` 目录存在
2. 确认访问路径与 `app/` 目录下的路由结构一致

---

## 附录

### A. 完整部署命令速查

```bash
# 首次部署
cd /var/www
git clone <仓库地址> cd-sjm-holdings
cd cd-sjm-holdings
pnpm install --frozen-lockfile --prod
pnpm build
pm2 start pnpm --name "sjm-holdings" -- start
pm2 save && pm2 startup

# 日常更新
cd /var/www/cd-sjm-holdings
git pull origin main
pnpm install --frozen-lockfile --prod
pnpm build
pm2 reload sjm-holdings
```

### B. 关键文件路径

| 文件 | 路径 |
|------|------|
| 项目目录 | `/var/www/cd-sjm-holdings` |
| Nginx 配置 | `/etc/nginx/sites-available/sjm-holdings.conf` |
| PM2 进程配置 | `~/.pm2/dump.pm2` |
| 应用日志 | `~/.pm2/logs/sjm-holdings-*.log` |
| 构建备份 | `/var/www/backups/` |
| 部署脚本 | `/var/www/cd-sjm-holdings/deploy.sh` |
