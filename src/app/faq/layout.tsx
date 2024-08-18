import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequenty Asked Questions - Hireup Challenge",
};

export default function FaqLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
      <div className="absolute top-0">
        <Link
          href={"/"}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
        >
          <h2 className="ml-8 text-2xl font-semibold transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;-
          </h2>
        </Link>
      </div>
      <main>{children}</main>
    </header>
  );
}
