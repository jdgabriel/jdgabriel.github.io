import { useState } from 'react'
import Confetti from './components/confetti'
import { MarkdownContent } from './components/markdown-content'
import { DownloadButton } from './components/pdf-compose'

export default function App() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleDownload = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 10000)
  }

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-zinc-800">
        {showConfetti && <Confetti />}
        <div className="bg-white shadow-lg p-16 pt-4 rounded-md w-[60rem] h-auto max-w-full mx-auto my-8 flex flex-col relative">
          {/* Botão flutuante no canto superior direito da div centralizada */}
          <div className="absolute -top-4 right-4 z-50">
            <div onClick={handleDownload}>
            <DownloadButton />              
            </div>
          </div>
          <MarkdownContent />
        </div>
      </div>
    </>
  )
}
