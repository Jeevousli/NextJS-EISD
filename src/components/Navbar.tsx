import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/csr">CSR</Link></li>
        <li><Link href="/ssr">SSR</Link></li>
      </ul>
    </nav>
  );
}
