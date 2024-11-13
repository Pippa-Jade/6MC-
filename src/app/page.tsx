import Link from 'next/link';
import { ShieldCheck, Smartphone, Zap, Search } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-900">
        <a className="flex items-center justify-center" href="#">
          <ShieldCheck className="h-6 w-6 text-red-50" />
          <span className="ml-2 text-2xl font-bold text-red-50">AuthentiScan</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline text-red-50" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline text-red-50" href="#how-it-works">
            How It Works
          </a>
          <Link href="/scan-page">
            <a className="text-sm font-medium hover:underline text-red-50">Scan</a>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-red-900">
                  Verify Product Authenticity in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-red-800 md:text-xl">
                  Scan, verify, and protect yourself from counterfeit products with our cutting-edge authentication app.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center py-8">
          <Link href="/scan-page">
            <a className="bg-red-700 text-red-50 hover:bg-red-800 px-4 py-2 rounded-md">
              Scan
            </a>
          </Link>
        </div>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-red-900">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-red-200 p-4 rounded-lg border">
                <Smartphone className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Mobile Scanning</h3>
                <p className="text-red-700 text-center">Quickly scan products using your smartphone camera.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-red-200 p-4 rounded-lg border">
                <Zap className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Instant Results</h3>
                <p className="text-red-700 text-center">Get real-time authentication results in seconds.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-red-200 p-4 rounded-lg border">
                <Search className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Detailed Reports</h3>
                <p className="text-red-700 text-center">Access comprehensive product information and history.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-red-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-red-900">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-red-900">Download the App</h3>
                <p className="text-red-700 text-center">Get our app from your device&apos;s app store.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-red-900">Scan the Product</h3>
                <p className="text-red-700 text-center">Use your camera to scan the product&apos;s unique identifier.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-red-50 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-red-900">View Results</h3>
                <p className="text-red-700 text-center">Get instant authentication results and product details.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-red-900 text-red-50">
        <p className="text-xs text-red-300">© 2024 AuthentiScan. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
