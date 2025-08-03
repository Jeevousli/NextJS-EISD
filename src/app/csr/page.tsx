'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CSRPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Client Side Rendering (CSR)</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-2 rounded shadow">
            <Image src={product.image} alt={product.title} width={200} height={200} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
