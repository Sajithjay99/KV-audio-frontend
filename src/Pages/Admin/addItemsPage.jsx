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

  const onclickhandler=()=>{
    console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription);
    
    const token = localStorage.getItem("token");

    // if(token === null){
    //   toast.error("Please Login First");
    //   return;
    // }

    if(token){
      axios.post("http://localhost:3000/api/products/add",{
        key:productKey,
        name:productName,
        price:productPrice,
        category:productCategory,
        dimensions:productDimensions,
        description:productDescription
      },{
        headers:{
          Authorization: `Bearer ${token}` // or "Bearer " + token
        }
      }
      ).then((res)=>{
        console.log(res.data);
        toast.success("Item Added Successfully");
        navigate("/admin/items");
      }).catch((err)=>{
        console.log(err);
        toast.error("Failed to Add Item");
        
      })
      
    }else{
      toast.error("Please Login First");
      
    }
    
    
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1>Add Items</h1>

      <div className="w-[400px] border-[3px] flex flex-col  ">
        <input
          value={productKey}
          onChange={(e) => {
            setProductKey(e.target.value);
          }}
          type="text"
          placeholder="Product Key"
        />
        <input
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          type="text"
          placeholder="Product Name"
        />
        <input
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          type="number"
          placeholder="Product Price"
        />
        <select
          value={productCategory}
          onChange={(e) => {
            setProductCategory(e.target.value);
          }}
        >
          <option>Select Category</option>
          <option key="audio"> Audio </option>
          <option key="lights"> Lights </option>
        </select>
        <input
          value={productDimensions}
          onChange={(e) => {
            setProductDimensions(e.target.value);
          }}
          type="text"
          placeholder="Product Dimensions"
        />
        <input
          value={productDescription}
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
          type="text"
          placeholder="Product Description"
        />

        <button onClick={onclickhandler}>Add</button>
        <button  onClick={()=>{navigate("/admin/items")}}>Cancel</button>
        

        
      </div>
    </div>
  );
}
