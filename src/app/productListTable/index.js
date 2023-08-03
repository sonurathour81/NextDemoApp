"use client";
export default function ProductListTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Discount Percentage</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.data?.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>{val.title}</td>
                <td>{val.brand}</td>
                <td>{val.category}</td>
                <td>{val.description}</td>
                <td>{val.discountPercentage}</td>
                <td>{val.price}</td>
                <td>{val.rating}</td>
                <td>{val.stock}</td>
                <td>
                  <img src={val.thumbnail} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
