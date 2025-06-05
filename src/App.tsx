import { MarkdownContent } from './components/markdown-content'
import { DownloadButton } from './components/pdf-compose'

export default function App() {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-zinc-800">
        <div className="bg-white shadow-lg p-16 pt-4 rounded-md w-[60rem] h-auto max-w-full mx-auto my-8 flex flex-col relative">
          {/* Botão flutuante no canto superior direito da div centralizada */}
          <div className="absolute -top-3 right-4 z-50">
            <DownloadButton />
          </div>
          <MarkdownContent />
        </div>
      </div>
    </>
  )
}
