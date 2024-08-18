export const faqsConfig = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework for building web applications.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    question: "What is the Next.js App Router",
    answer:
      "The Next.js App Router introduces a new model for building applications using React's latest features such as Server Components, Streaming with Suspense, and Server Actions.",
  },

  {
    question: "What is the purpose of getStaticProps?",
    answer:
      "If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.",
  },
  {
    question: "What is the purpose of getStaticPaths?",
    answer:
      "getStaticPaths is used to specify dynamic routes to pre-render based on data.",
  },
  {
    question: "What is data caching?",
    answer:
      "Caching is the process of storing data to reduce the number of requests made to the server. Next.js provides a built-in Data Cache for individual data requests, giving you granular control of caching behavior.",
  },
  {
    question: "What is the purpose of getServerSideProps?",
    answer:
      "getServerSideProps is a Next.js function that can be used to fetch data and render the contents of a page at request time.",
  },
  {
    question: "Why does redirect use 307 and 308?",
    answer:
      "When using redirect() you may notice that the status codes used are 307 for a temporary redirect, and 308 for a permanent redirect. While traditionally a 302 was used for a temporary redirect, and a 301 for a permanent redirect, many browsers changed the request method of the redirect, from a POST to GET request when using a 302, regardless of the origins request method.",
  },
  {
    question: "Can I test async server components?",
    answer:
      "Since async Server Components are new to the React ecosystem, some tools do not fully support them. In the meantime, we recommend using End-to-End Testing over Unit Testing for async components.",
  },
];
