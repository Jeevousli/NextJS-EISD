import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FakeStore | Home',
  description: 'Simple store using Next.js 15',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
