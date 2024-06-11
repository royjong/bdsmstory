"use client";
import { useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface ApiResponse {
  checkoutUrl: string;
}

export default function CheckoutComponent(): JSX.Element {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/pay', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data: ApiResponse = await response.json();
        window.location.href = data.checkoutUrl;
      } else {
        console.error('Failed to fetch payment URL');
      }
    } catch (error) {
      console.error('Error fetching payment URL:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col items-center justify-center py-4">
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-gray-600">Based on 5000 reviews</p>
            <div className="mb-4">
              <Image src="/bdsm.png" alt="Logo" width={128} height={128} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">€14,95</h2>
            <ul className="mt-4 text-gray-700 text-left">
              <li className="flex items-center mb-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">9 <b>"Extreme"</b> verhalen (Niet op afrekenen klikken als je niet tegen een stootje kan).</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2"><b>Dominantie/Onderdanigheids</b> tips voor zowel mannen als vrouwen</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Geanonimiseerde afschrijving: Op je bankrekening staat alleen "aventuramedia.nl" en niks over deze website. </span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2">Na afrekenen ontvang je direct het e-book in je mail </span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Afrekenen & direct lezen
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Beveiligde & anonieme check out met <span className="font-semibold">Mollie</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">Je informatie is veilig bij ons.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
