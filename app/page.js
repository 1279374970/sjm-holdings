import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f2ec] px-4 py-12">
      <section className="w-full max-w-xl rounded-[24px] border border-[#d9d8d1] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-10">
        <p className="text-[12px] uppercase tracking-[0.2em] text-[#7a837f]">SJM Demos</p>
        <h1 className="mt-3 font-serif text-[36px] font-extralight leading-[1.1] text-[#1f2524] sm:text-[44px]">
          Select a demo page
        </h1>
        <p className="mt-4 text-[14px] leading-[1.8] text-[#6f7774]">
          Choose a target page to preview the design implementation.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/demo1"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#001e1e] px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#033333]"
          >
            Demo1
          </Link>
          <Link
            href="/demo2"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#001e1e] px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-[#001e1e] transition hover:bg-[#001e1e] hover:text-white"
          >
            Demo2
          </Link>
          <Link
            href="/demo3"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#8b7d57] bg-[#a8996e] px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#8f8158]"
          >
            Demo3
          </Link>
        </div>
      </section>
    </main>
  );
}
