import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddItemsPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const navigate = useNavigate();

  const onclickhandler = () => {
    console.log(
      productKey,
      productName,
      productPrice,
      productCategory,
      productDimensions,
      productDescription
    );

    const token = localStorage.getItem("token");

    // if(token === null){
    //   toast.error("Please Login First");
    //   return;
    // }

    if (token) {
      axios
        .post(
          "http://localhost:3000/api/products/add",
          {
            key: productKey,
            name: productName,
            price: productPrice,
            category: productCategory,
            dimensions: productDimensions,
            description: productDescription,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // or "Bearer " + token
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Item Added Successfully");
          navigate("/admin/items");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to Add Item");
        });
    } else {
      toast.error("Please Login First");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Add Items</h1>
  
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <input
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          type="text"
          placeholder="Product Key"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        />
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Product Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        />
        <input
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          type="number"
          placeholder="Product Price"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        />
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full p-3 mb-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        >
          <option disabled>Select Category</option>
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>
        <input
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          type="text"
          placeholder="Product Dimensions"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        />
        <input
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          type="text"
          placeholder="Product Description"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-dark focus:outline-none"
        />
  
        <div className="flex gap-4">
          <button
            onClick={onclickhandler}
            className="w-full py-3 bg-blue-400 rounded-lg transilacktion text-b hover:bg-opacity-70"
          >
            Add
          </button>
          <button
            onClick={() => navigate("/admin/items")}
            className="w-full py-3 text-gray-700 transition bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}  
