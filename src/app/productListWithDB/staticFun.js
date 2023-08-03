import { uri } from "../../../config";

export const getProductList = async () => {
  try {
    let data = await fetch(`${uri}/product`);
    let finalData = await data.json();
    return finalData;
  } catch (e) {
    alert("Something wrong");
  }
};

export const getProductDetail = async (id) => {
  try {
    let data = await fetch(`${uri}/product/${id}`);
    let finalData = await data.json();
    return finalData;
  } catch (e) {
    alert("Something wrong");
  }
};

export const addProduct = async (data) => {
  try {
    const sendData = JSON.stringify(data);
    let res = await fetch(`${uri}/product`, {
      method: "post",
      body: sendData,
    });
    let result = await res.json();
    return result;
  } catch (e) {
    alert("Something wrong");
  }
};

export const updateProduct = async (data, id) => {
  try {
    const sendData = JSON.stringify(data);
    let res = await fetch(`${uri}/product/${id}`, {
      method: "put",
      body: sendData,
    });

    let result = await res.json();
    return result;
  } catch (e) {
    alert("Something wrong");
  }
};

export const deleteProduct = async (id) => {
  try {
    let res = await fetch(`${uri}/product/${id}`, {
      method: "DELETE",
    });
    let response = await res.json();
    if (response.success) {
      getProductList();
      alert("Deleted Successfully");
    } else {
      throw Error;
    }
  } catch (e) {
    alert("Something wrong");
  }
};
