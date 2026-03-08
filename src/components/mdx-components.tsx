import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-heading font-bold text-4xl md:text-5xl mt-10 mb-6 tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading font-bold text-2xl md:text-3xl mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading font-bold text-xl md:text-2xl mt-8 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed mb-5 opacity-85">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg opacity-85">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-base md:text-lg opacity-85">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-bold text-fg">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 border-black pl-5 py-2 my-6 bg-accent-yellow/20
                   italic text-base md:text-lg"
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-t-3 border-black my-10" />,
    code: ({ children }) => (
      <code
        className="px-2 py-0.5 text-sm font-mono bg-black/5
                   border border-black/10 rounded-[3px]"
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        className="p-6 my-6 overflow-x-auto text-sm font-mono
                   bg-black text-white border-3 border-black rounded-[5px] shadow-brutal"
      >
        {children}
      </pre>
    ),
  };
}
