"use client";
import { useRouter } from "next/navigation";
import { deleteProduct } from "./staticFun";
import { useEffect, useState } from "react";

export default function ListTable({ data }) {
  const router = useRouter();
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    setDataList([...data]);
  }, [data]);

  let renderDiv = (val) => {
    return (
      <tr
        key={val._id}
        onClick={() => {
          router.push(`/users/${val.id}`);
        }}
      >
        <td>{val.title}</td>
        <td>{val.brand}</td>
        <td>{val.category}</td>
        <td>{val.price}</td>
        <td>{val.stock}</td>
        <td>
          <div className="btnFlx">
            <button
              onClick={(e) => {
                router.push(`/productListWithDB/${val._id}/update`);
                e.stopPropagation();
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteProduct(val._id);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{dataList.map((val) => renderDiv(val))}</tbody>
    </table>
  );
}
