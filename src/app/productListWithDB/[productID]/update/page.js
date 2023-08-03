"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductForm from "../../productForm";
import { getProductDetail, updateProduct } from "../../staticFun";

export default function UpdateUser(props) {
  const router = useRouter();
  const initData = {
    title: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  };
  const [data, setData] = useState({ ...initData });

  const getDetail = async () => {
    let data = await getProductDetail(props.params.productID);
    let { _id, __v, ...rest } = data;
    setData({ ...rest });
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    let response = await updateProduct(data, props.params.productID);
    console.log("adsfasdf", response);
    if (response.success) {
      alert("Update Successfully");
      router.push("/productListWithDB");
    } else {
      alert("Something is missing");
    }
  };

  return (
    <div className="userForm">
      <h1 className="heading">Update Product</h1>
      <ProductForm
        data={data}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}
