import Link from "next/link";
import ProductListTable from "../productListTable";

async function getProductList() {
  let data = await fetch("https://dummyjson.com/products");
  let finalData = await data.json();
  return finalData.products;
}

export default async function Product() {
  let apiData = await getProductList();

  return (
    <div>
      <Link href={"/"}>Go to Home</Link>
      <h1>Product List</h1>
      <ProductListTable data={apiData} />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Product with server side rendering",
  };
}
