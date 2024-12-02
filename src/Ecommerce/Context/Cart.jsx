import React,{useContext,useEffect,useState} from "react";
import { DataContext } from "./Context";

function Cart(){
    const {cart,changeQuantity}=useContext(DataContext);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        let totalPrice=cart.reduce((acc,item)=>acc+item.price*item.count,0);
        setTotal(totalPrice);

    },[cart]
    );
    console.log(cart)
    return(
        <>
        <table className="table container p-2">
            <thead>
                <tr>
                    <th className="border p-2 text-center" >ID</th>
                    <th className="border p-2 text-center" >Name</th>
                    <th className="border p-2 text-center" >Price</th>
                    <th className="border p-2 text-center" >Count</th>
                </tr>

            </thead>
            <tbody>
                {cart.map((item)=>(
                    <tr>
                        <td className="border p-2 text-center" >{item.id}</td>
                        <td className="border p-2 text-center" >{item.name}</td>
                        <td className="border p-2 text-center" >{item.price}</td>
                        <td className="border p-2 text-center" >
                            <button className="btn btn-primary m-2" onClick={()=>changeQuantity(item.id,item.count+1)}>+</button>
                            {item.count}
                            <button className="btn btn-danger m-2" onClick={()=>changeQuantity(item.id,item.count-1)}>-</button>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
        {
        <div className="p-2">
            <h1 >Total:{total} EG</h1>
            <button className="btn btn-success ">Buy Now</button>
        </div>
        }
        
        </>
    )
}
export default Cart