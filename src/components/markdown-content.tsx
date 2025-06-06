import Markdown from 'react-markdown'
import readme from '../../README.md?raw'

export function MarkdownContent() {
  return (
    <Markdown
      components={{
        h1: (props) => (
          <h1 className="text-3xl font-bold mt-6 mb-2 m-auto uppercase" {...props} />
        ),
        h2: (props) => (
          <h2 className="text-xl font-semibold mt-5 mb-3" {...props} />
        ),
        h3: (props) => (
          <h3 className="text-xl font-medium mt-4 mb-2" {...props} />
        ),
        p: (props) => (
          <p className="mb-4 text-base leading-relaxed" {...props} />
        ),
        ul: (props) => (
          <ul className="list-disc list-inside mb-2" {...props} />
        ),
        ol: (props) => (
          <ol className="list-decimal list-inside mb-2" {...props} />
        ),
        li: (props) => (
          <li className="ml-4 mb-1" {...props} />
        ),
        a: (props) => (
          <a className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer" {...props} />
        ),
        hr: (props) => (
          <hr className="border-zinc-300 rounded-full" {...props} />
        ),
      }}
    >
      {readme.replace(/<br\s*\/?>/gi, '\n')}
    </Markdown>
  )
}