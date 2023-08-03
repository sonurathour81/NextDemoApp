import ListTable from "./listTable";
import { getProductList } from "./staticFun";

export default async function productListWithDB() {
  let data = await getProductList();

  return (
    <div>
      <h1>Product List With DB</h1>
      <ListTable data={data} />
    </div>
  );
}
