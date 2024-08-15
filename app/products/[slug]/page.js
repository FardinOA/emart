import Details from "@/components/main/products/details";
import React from "react";
const getData = async (id) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {}
};

const page = async ({ params }) => {
  const data = await getData(params.slug);
  return <Details data={data} />;
};

export default page;
