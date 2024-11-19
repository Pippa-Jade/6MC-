'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Camera, Wifi, CheckCircle2, XCircle } from 'lucide-react'

export default function ScanPage() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle')
  const [isAuthentic, setIsAuthentic] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const startScan = () => {
    setScanState('scanning')
    // Simulate scanning process
    setTimeout(() => {
      analyzeFrame()
    }, 3000)
  }

  const analyzeFrame = () => {
    const canvas = canvasRef.current
    const video = videoRef.current
    if (canvas && video) {
      const context = canvas.getContext('2d')
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data
        let redCount = 0

        for (let i = 0; i < data.length; i += 4) {
          const red = data[i]
          const green = data[i + 1]
          const blue = data[i + 2]

          if (red > 150 && green < 100 && blue < 100) {
            redCount++
          }
        }

        console.log(`Red count: ${redCount}`)

        if (redCount > 0) {
          setIsAuthentic(true)
        } else {
          setIsAuthentic(false)
        }

        setScanState('complete')
        saveScanResult(isAuthentic)
      }
    }
  }

  const saveScanResult = (isAuthentic: boolean | null) => {
    const scannedProducts = JSON.parse(localStorage.getItem('scannedProducts') || '[]')
    const newProduct = {
      id: scannedProducts.length + 1,
      name: `Lilly Product ${String.fromCharCode(65 + scannedProducts.length)}`,
      scannedAt: new Date().toLocaleString(),
      isAuthentic
    }
    scannedProducts.push(newProduct)
    localStorage.setItem('scannedProducts', JSON.stringify(scannedProducts))
  }

  useEffect(() => {
    if (videoRef.current) {
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' }, // Use the rear camera if available
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      }

      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {
          videoRef.current!.srcObject = stream
        })
        .catch(err => {
          console.error("Error accessing camera: ", err)
          alert("Error accessing camera. Please ensure you have granted camera permissions.")
        })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-24 flex items-center" style={{ backgroundColor: '#f8f9fa' }}>
        <a className="flex items-center justify-center" href="/">
          <img src="/Authenti-scan.png" alt="AuthentiScan Logo" className="h-32 w-32" />
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="bg-red-700 text-red-50 hover:bg-red-800 px-6 py-3 rounded-md text-lg font-semibold shadow-lg" href="/">
            Home
          </Link>
          <Link className="bg-red-700 text-red-50 hover:bg-red-800 px-6 py-3 rounded-md text-lg font-semibold shadow-lg" href="/scan-history">
            History
          </Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-900 mb-8 text-center">Product Authentication</h1>
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Scan Your Product</div>
            <p className="text-gray-700 text-base">Use your camera to scan the product for authentication</p>
          </div>
          <div className="px-6 py-4">
            <div className="flex flex-col items-center space-y-4">
              <video ref={videoRef} autoPlay className="w-full h-64 bg-black rounded-md"></video>
              <canvas ref={canvasRef} className="hidden" width="1280" height="720"></canvas>
              {scanState === 'idle' && (
                <button onClick={startScan} className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">
                  Start Scan
                </button>
              )}
              {scanState === 'scanning' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Camera className="h-6 w-6 text-red-600 animate-pulse" />
                    <span className="text-red-700">Scanning...</span>
                  </div>
                  <div className="h-2 bg-red-200 rounded">
                    <div className="h-2 bg-red-600 rounded animate-[scan_3s_ease-in-out_infinite]" style={{ width: '0%' }}></div>
                  </div>
                </div>
              )}
              {scanState === 'complete' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`flex flex-col items-center p-4 rounded-lg ${isAuthentic ? 'bg-green-100' : 'bg-red-100'}`}>
                      <Camera className={`h-8 w-8 mb-2 ${isAuthentic ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm font-medium ${isAuthentic ? 'text-green-700' : 'text-red-700'}`}>Digital Watermark</span>
                      {isAuthentic ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 mt-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mt-2" />
                      )}
                    </div>
                    <div className={`flex flex-col items-center p-4 rounded-lg ${isAuthentic ? 'bg-green-100' : 'bg-red-100'}`}>
                      <Wifi className={`h-8 w-8 mb-2 ${isAuthentic ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm font-medium ${isAuthentic ? 'text-green-700' : 'text-red-700'}`}>RFID Check</span>
                      {isAuthentic ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 mt-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mt-2" />
                      )}
                    </div>
                  </div>
                  <div className={`text-center p-4 rounded-lg ${isAuthentic ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    <p className="text-lg font-bold">
                      {isAuthentic ? 'Product is Authentic' : 'Product May Be Counterfeit'}
                    </p>
                    <p className="text-sm mt-2">
                      {isAuthentic
                        ? 'This product has passed our authentication checks.'
                        : 'This product failed one or more authentication checks. Please verify with the manufacturer.'}
                    </p>
                  </div>
                  <button onClick={() => { setScanState('idle'); setIsAuthentic(null) }} className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">
                    Scan Another Product
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
