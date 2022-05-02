import { getSupabase } from '../utils/supabase';
import Image from 'next/image'

export default function Index({ products, categories }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h2>lastest products</h2>
      {categories &&
        categories.map((category) => (
            <label key={category.id}>
              <input type="checkbox"/>
              {category.name}
            </label>
        ))}
      <div className='flex'>
      { products &&
        products.map((product) => (
          <div key={product.id} className='border-2 border-gray-500 rounded shadow-lg hover:border-gray-600'>
            <Image
              src={product.imageurl}
              alt={product.name}
              width={200}
              height={200}
              responsive="true"
            />
            <div>
              {product.name} pour {product.price}€
            </div>
          </div>
      ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const supabase = getSupabase();

  const { data: products } = await supabase.from("products").select("*");
  const { data: categories } = await supabase.from("category").select("*");

  return {
    props: { products, categories },
  };
}