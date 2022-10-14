import React from 'react'
import './Ad_eproduct.css'
import Test from "./test.json"
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
function Product(props) {
     const { product, number } = props;
     const listProducts = Test;


     const handleClickUpdate = (productId) =>{
      // console.log(productId);
      // const result = listProducts.filter(product => product.id !== productId)
      // console.log({result});
      delete listProducts[0];
      // deleteProduct(productId)
      // deleteProduct(productId){ fetch("/product/delete/id={productId}") }

     }
     console.log(Test);

     const handleClickDelete = (productId) =>{
      console.log(productId);
   
      delete Test[0]
      console.log(Test);

       // deleteProduct(productId)

     }


    return (
        <tr>
          <td>{number + 1}</td>
          <td>{product.name}</td>
          <td>{product.type}</td>
          <td>{product.type}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td>{product.unit}</td>
          <td>
            <img src={product.image} className="product_img"></img>
          </td>
          <td className="update-product">
            <DeleteOutlined onClick={() => handleClickDelete(product.id)}/>
            <EditOutlined onClick={() => handleClickUpdate(product.id)}/>
          </td>
         
        </tr>
      );
}
        

export default Product