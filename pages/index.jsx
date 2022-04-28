import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { getSupabase } from '../utils/supabase';
import { Card, CardBody } from 'reactstrap';
import Image from 'next/image'

export default function Index({ products, categories }) {
  return (
    <>
      <Hero />
      <hr />
      <h2>lastest products</h2>
      {categories &&
        categories.map((category) => (
            <label key={category.id}>
              <input type="checkbox"/>
              {category.name}
            </label>
        ))}
      <div>
      { products &&
        products.map((product) => (
          <Card key={product.id}>
            <Image
              src={product.imageurl}
              alt={product.name}
              width={200}
              height={200}
              responsive
            />
            <CardBody >
              {product.name} pour {product.price}€
            </CardBody>
          </Card>
      ))}
      </div>
      <hr/>
      <Content />
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