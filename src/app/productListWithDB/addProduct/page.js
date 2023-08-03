"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { uri } from "../../../../config";
import ProductForm from "../productForm";
import { addProduct } from "../staticFun";

export default function AddUser() {
  const router = useRouter();
  const initData = {
    title: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  };
  const [data, setData] = useState({ ...initData });

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    let response = await addProduct(data);
    if (response.success) {
      alert(response.message);
      setData({ ...initData });
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="userForm">
      <br />
      <h1 className="heading">Add Product</h1>
      <ProductForm
        data={data}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
