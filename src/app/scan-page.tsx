'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShieldCheck, Camera, Wifi, CheckCircle2, XCircle } from 'lucide-react'

export default function ScanPage() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle')
  const [isAuthentic, setIsAuthentic] = useState<boolean | null>(null)

  const startScan = () => {
    setScanState('scanning')
    // Simulate scanning process
    setTimeout(() => {
      setScanState('complete')
      // Randomly determine authenticity for demonstration
      setIsAuthentic(Math.random() > 0.5)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-900">
        <Link className="flex items-center justify-center" href="/">
          <ShieldCheck className="h-6 w-6 text-red-50" />
          <span className="ml-2 text-2xl font-bold text-red-50">AuthentiScan</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-900 mb-8 text-center">Product Authentication</h1>
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Scan Your Product</div>
            <p className="text-gray-700 text-base">Use your camera to scan the product for authentication</p>
          </div>
          <div className="px-6 py-4">
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
                  <div className="h-2 bg-red-600 rounded animate-[scan_3s_ease-in-out_infinite]" style={{width: '0%'}}></div>
                </div>
              </div>
            )}
            {scanState === 'complete' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-red-100 rounded-lg">
                    <Camera className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-red-700">Digital Watermark</span>
                    {isAuthentic ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-2" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mt-2" />
                    )}
                  </div>
                  <div className="flex flex-col items-center p-4 bg-red-100 rounded-lg">
                    <Wifi className="h-8 w-8 text-red-600 mb-2" />
                    <span className="text-sm font-medium text-red-700">RFID Check</span>
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
                <button onClick={() => {setScanState('idle'); setIsAuthentic(null)}} className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">
                  Scan Another Product
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t bg-red-900 text-red-50">
        <p className="text-xs text-center text-red-300">© 2024 AuthentiScan. All rights reserved.</p>
      </footer>
    </div>
  )
}
