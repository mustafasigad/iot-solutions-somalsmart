// components/layout/PageLayout.js
"use client";
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Add page title for pages other than home */}
        {pathname !== '/' && (
          <div className="pt-24 pb-8 bg-black text-white">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-blue-400">
                {pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1)}
              </h1>
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}