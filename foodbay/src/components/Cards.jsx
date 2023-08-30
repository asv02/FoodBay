import React,{useEffect, useState,useRef} from 'react'
import { useDispatchCart, useCart} from './ContextReducer';
export default function Cards(props) {
    
    const priceRef=useRef();//for finalPrice calculation.
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceoptions = Object.keys(options);
    let data = useCart();
    //this needs to be done to store in cart the same qty as selected.
    const [qty, setqty] = useState(1)//this is for qty of dishses
    const [size, setsize] = useState("")//this is for size of pizza

    //useContext is use to avoid prop drilling problem means,when you are doing something on this page but you want result on it's child then props can be used but if you want at child->child->child->child means at 6th level then we use useContext.

    //now we can use useState to store some collection of data belongs to one card but if you want to store data for multiple cards,the efficient method will be to use useReducer.


    const hangleAddtoCart = async () => {
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size
        })
        console.log(data)
    }

    let finalPrice=qty*parseInt(options[size]);
    useEffect(()=>{
        setsize(priceRef.current.value)
    },[])
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        {/* <p className="card-text">Some quick example text</p> */}
                        <div className="container w-100">
                            {/* Building a drop-down list */}
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => { setqty(e.target.value) }}>
                                {/* javascipt to create option in drop-down*/}
                                {Array.from(Array(6), (e, i) => {
                                    return (<option key={i + 1} value={i + 1}>{i + 1}</option>)
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => { setsize(e.target.value) }}>
                                {
                                    priceoptions.map((data) => {
                                        return <option value={data}>{data}</option>
                                    })
                                }
                            </select>
                            <div className="d-inline">
                            ₹{finalPrice}/-
                            </div>
                        </div>
                        <hr></hr>
                        <button className='btn btn-success text-white justify-conter ms-2' onClick={hangleAddtoCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
