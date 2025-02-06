const sampleArr = [
    {
        key: "P001",
        name: "Wireless Headphones",
        price: 59.99,
        category: "Electronics",
        dimensions: "7.5 x 6.5 x 3 inches",
        image: ["https://via.placeholder.com/150"],
        description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
        availability: true
    },
    {
        key: "P002",
        name: "Smartphone Stand",
        price: 12.99,
        category: "Accessories",
        dimensions: "4 x 3 x 5 inches",
        image: ["https://via.placeholder.com/150"],
        description: "Adjustable aluminum stand compatible with all smartphones and tablets.",
        availability: true
    },
    {
        key: "P003",
        name: "Gaming Mouse",
        price: 29.99,
        category: "Gaming",
        dimensions: "5 x 2.5 x 1.5 inches",
        image: ["https://via.placeholder.com/150"],
        description: "Ergonomic gaming mouse with customizable RGB lighting and six programmable buttons.",
        availability: true
    },
    {
        key: "P004",
        name: "Mechanical Keyboard",
        price: 89.99,
        category: "Electronics",
        dimensions: "17 x 5 x 1.5 inches",
        image: ["https://via.placeholder.com/150"],
        description: "Mechanical keyboard with tactile switches and customizable RGB backlighting.",
        availability: false
    },
    {
        key: "P005",
        name: "Portable Bluetooth Speaker",
        price: 45.99,
        category: "Audio",
        dimensions: "6 x 2.5 x 2.5 inches",
        image: ["https://via.placeholder.com/150"],
        description: "Compact and powerful Bluetooth speaker with waterproof design and deep bass.",
        availability: true
    }
];



import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function AdminItemsPage() {
    
    const [items, setItems] = useState(sampleArr);
  return (
    <div className='relative w-full h-full'>

        <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    
                    <th>Availability</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    sampleArr.map((item, index) => (
                        <tr key={index}>
                            <td>{item.key}</td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.category}</td>
                            <td>{item.dimensions}</td>
                           
                            <td>{item.availability ? "Available" : "Out of Stock"}</td>
                           
                            
                        </tr>
                    ))
                }
            </tbody>



            
        </table>








        
            
      <Link to="/admin/items/add">
            <CiCirclePlus className='text-[50px]  absolute right-2 bottom-2 hover:text-red-600  '/>
            </Link>
    </div>
  )
}

