"use client";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/services/product.services";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.products);
  return (
    <main>
      <h1>Counter Page</h1>
      {count}
      <button onClick={() => dispatch(getProducts())}>Get Products</button>
    </main>
  );
}
