import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetail({ params }: Props) {
  // Await params untuk mendapatkan id
  const { id } = await params;
  
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <div className="max-w-xl mx-auto">
      <Link href="/" className="text-blue-500 underline mb-4 inline-block">
        ← Kembali ke Beranda
      </Link>

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p className="text-xl mt-4">{product.description}</p>
      <p className="font-bold text-lg mt-2">${product.price}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}