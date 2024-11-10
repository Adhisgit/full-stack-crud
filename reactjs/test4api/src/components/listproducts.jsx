
// import React, {useState} from "react";
// import { useEffect } from "react";
// import { listproducts } from "../services/products";
// const listproducts = () => {

//     const [products,setProducts] = useState([])
//     useEffect(() => {
//         listproducts().then((Response) => {
//             setProducts(Response.data);

//         }).catch(error => {
//             console.error(error);
//         })
//     },[])
//     return(
//         <div className="container"> 

//         <h2 className="test-center">list of products</h2>
//         <table className="tableofproducts">
//             <thead>
//                 <tr>
//                     products id
//                 </tr>
//                 <tr>
//                     products name
//                 </tr>
//                 <tr>products price

//                 </tr>

//             </thead>
//         </table>
//         <tbody>
//             {
//                 products.map(products=>
//                     <tr key={products.id}>
//                         <tr>{products.name}</tr>
//                         <tr>{products.price}</tr>
//                     </tr>
//                 )
//             }
//         </tbody>

//          </div>

//     )
// }

// export default listproducts