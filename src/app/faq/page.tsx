"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { faqsConfig } from "../faqsConfig";

const Faqs = ({ searchTerm }: { searchTerm: string }) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const filteredFaqs = React.useMemo(() => {
    return faqsConfig.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="items-start w-3/4 max-w-[50rem]">
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              onClick={() => toggleAccordion(index)}
              key={index}
              className="cursor-pointer mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="flex justify-between items-center text-xl font-semibold mb-2 text-gray-100">
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 motion-reduce:transform-none ${
                    isOpen ? "rotate-180" : "group-hover:translate-y-1 rotate-0"
                  }`}
                >
                  ↓
                </span>
              </h2>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 mt-2">{faq.answer}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400">No matching FAQs.</p>
      )}
    </div>
  );
};

export default function FaqPage() {
  const searchParams = useSearchParams();
  const initSearchTerm = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = React.useState(initSearchTerm);
  const router = useRouter();

  React.useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`/faq?${params.toString()}`); // set the new search param to url query
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-8 gap-20">
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-6 w-full placeholder-gray-100 max-w-md p-2 border border-gray-500 bg-gray-900 rounded text-gray-100"
      />
      <Faqs searchTerm={searchTerm} />
    </main>
  );
}
