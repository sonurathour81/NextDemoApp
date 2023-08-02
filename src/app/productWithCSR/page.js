"use client";
import { useEffect, useState } from "react";
import ProductListTable from "../productListTable";
import Link from "next/link";

export default function Product() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch("https://dummyjson.com/products");
      let finalData = await data.json();
      setApiData([...finalData.products]);
    })();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ProductListTable data={apiData} />
    </div>
  );
}




