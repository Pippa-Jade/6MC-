'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  scannedAt: string;
  isAuthentic: boolean;
}

export default function Component() {
  const [scannedProducts, setScannedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem('scannedProducts') || '[]');
    setScannedProducts(products);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-red-900">
        <Link className="flex items-center justify-center" href="/">
          <ShieldCheck className="h-6 w-6 text-red-50" />
          <span className="ml-2 text-2xl font-bold text-red-50">LillyAuthentiScan</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline text-red-50" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline text-red-50" href="/scan-page">
            Scan 
          </Link>
        </nav>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#8B3A3A]">Scanned Products History</h2>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scanned At
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scannedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.scannedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.isAuthentic ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.isAuthentic ? 'Authentic' : 'Not Authentic'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
