import Link from 'next/link';
import { ShieldCheck, Smartphone, Zap, Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-900">
        <Link className="flex items-center justify-center" href="/">
          <ShieldCheck className="h-6 w-6 text-red-50" />
          <span className="ml-2 text-2xl font-bold text-red-50">LillyAuthentiScan</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline text-red-50" href="/scan-page">
            Scan
          </Link>
          <Link className="text-sm font-medium hover:underline text-red-50" href="/scan-history">
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
                <Link href="/scan-history" className="bg-red-700 text-red-50 hover:bg-red-800 px-6 py-3 rounded-md text-lg font-semibold shadow-lg">
                  Scan History
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-red-900 text-red-50">
        <p className="text-xs text-red-300">© 2024 LillyAuthentiScan. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
