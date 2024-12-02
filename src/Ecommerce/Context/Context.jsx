import React,{createContext,useState} from "react";
export const DataContext=createContext();

function DataProvider({children}){
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem("context"))||[])
    const [products]=useState([
        {
            id:1,
            name:"dress",
            image:"1.jpg",
            price:200,
            count:1,
           },
           
              {
                id:2,
                name:"baby suit",
                image:"4.jpg",
                price:200,
                count:1,
               },
       
              {
               id:3,
               name:"t shirt",
               image:"3.jpg",
               price:400,
               count:1,
              },
              {
                id:4,
                name:"Jense Abaya",
                image:"7.jpg",
                price:380,
                count:1,
               },
              
       
              
       
              {
               id:5,
               name:"bantalon",
               image:"5.jpg",
               price:300,
               count:1,
              },
              {
               id:6,
               name:"Slamic Abaya",
               image:"6.jpg",
               price:280,
               count:1,
              },
              {
                id:7,
                name:"bejama",
                image:"2.jpg",
                price:250,
                count:1,
               },
              
              {
               id:8,
               name:"Abaya",
               image:"8.jpg",
               price:210,
               count:1,
              },
              {
               id:9,
               name:"clock",
               image:"9.jpg",
               price:290,
               count:1,
              },
              {
               id:10,
               name:"clock2",
               image:"10.jpg",
               price:480,
               count:1,
              },
              {
               id:11,
               name:"clock",
               image:"11.jpg",
               price:270,
               count:1,
              },
              {
               id:12,
               name:"dress",
               image:"12.jpg",
               price:450,
               count:1,
              }
        

    ]);
    //addToCart
    const addToCart=(product)=>{
        const productFind=cart.findIndex((item)=>item.id===product.id)
        console.log(productFind)
        let updatedCart;
        if(productFind!==-1){
            updatedCart=[...cart];
            updatedCart[productFind].count+=1;

        }else{
            updatedCart=[...cart,{...product}]
        }
        setCart(updatedCart)
        localStorage.setItem("context",JSON.stringfy(updatedCart))
    };
    const changeQuantity =(id,newQuantity)=>{
        const updatedCart=cart.map((product)=>
          product.id===id?{...product,count:newQuantity} :product 
        )
        .filter((product)=>product.count>0);
        setCart(updatedCart)
        localStorage.setItem("context",JSON.stringfy(updatedCart));
    };
    return(
    <DataContext.Provider value={{products,addToCart,cart,changeQuantity}}>{children}</DataContext.Provider>
    );
}

export default DataProvider;