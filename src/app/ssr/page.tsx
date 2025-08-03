import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // to force SSR

export default async function SSRPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });
  const products = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Server Side Rendering (SSR)</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <Link
  key={product.id}
  href={`/product/${product.id}`}
  className="border p-2 rounded shadow block hover:shadow-lg transition"
>
  <Image src={product.image} alt={product.title} width={200} height={200} />
  <p className="mt-2 font-semibold">{product.title}</p>
</Link>

        ))}
      </div>
    </div>
  );
}
