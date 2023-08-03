"use client";

export default function ProductForm(props) {
  return (
    <div className="cstmForm">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={props.data.title}
          onChange={props.handleUpdate}
        />
      </div>
      <div>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={props.data.brand}
          onChange={props.handleUpdate}
        />
      </div>
      <div>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={props.data.category}
          onChange={props.handleUpdate}
        />
      </div>
      <div>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={props.data.price}
          onChange={props.handleUpdate}
        />
      </div>
      <div>
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={props.data.stock}
          onChange={props.handleUpdate}
        />
      </div>
      <div>
        <button onClick={props.handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
