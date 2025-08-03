import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Products (SSG)</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block border p-2 rounded hover:shadow-md"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-500">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
