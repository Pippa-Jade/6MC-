'use client'

import Link from 'next/link'
import { Smartphone, Zap, Search } from 'lucide-react'
//import AuthentiScanLogo from '/Users/L079029/Projects/6MC/6MC-/Authenti-scan.png' // Adjust the path as needed

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-24 flex items-center" style={{ backgroundColor: '#f8f9fa' }}>
        <a className="flex items-center justify-center" href="/">
          <img src="/Authenti-scan.png" alt="AuthentiScan Logo" className="h-32 w-32" />
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="bg-red-700 text-red-50 hover:bg-red-800 px-6 py-3 rounded-md text-lg font-semibold shadow-lg" href="/scan-history">
            History
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-red-900">
                  Verify Your Lilly Product is Authentic in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-red-800 md:text-xl">
                  Scan, verify, and protect yourself from counterfeit products with our cutting-edge authentication app that is compatible with Lilly health.
                </p>
              </div>
              <div className="flex justify-center py-8 space-x-4">
                <Link href="/scan-page" className="bg-red-700 text-red-50 hover:bg-red-800 px-6 py-3 rounded-md text-lg font-semibold shadow-lg">
                  Scan
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 mt-12">
              <div className="bg-red-200 p-8 rounded-lg w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-red-900">
                  Key Features
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <Smartphone className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Mobile Scanning</h3>
                      <p className="text-red-700">Quickly scan products using your smartphone camera.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Zap className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Instant Results</h3>
                      <p className="text-red-700">Get real-time authentication results in seconds.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Search className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Detailed Reports</h3>
                      <p className="text-red-700">Access comprehensive product information and history.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-red-200 p-8 rounded-lg w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-red-900">
                  How It Works
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Open the App</h3>
                      <p className="text-red-700">Open the Lilly health app.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900">Scan the Product</h3>
                      <p className="text-red-700">Click to use the Scanning website and start scanning with your camera.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-900">View Results</h3>
                      <p className="text-red-700">Get instant authentication results and product details.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}
