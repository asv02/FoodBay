import React from 'react'
export default function Cards(props) {


    let options = props.options;
    let priceoptions = Object.keys(options);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodname}</h5>
                        <p className="card-text">Some quick example text</p>
                        <div className="container w-100">
                            {/* Building a drop-down list */}
                            <select className='m-2 h-100 bg-success rounded'>
                                {/* javascipt to create option in drop-down*/}
                                {Array.from(Array(6), (e, i) => {
                                    return (<option key={i + 1} value={i + 1}>{i + 1}</option>)
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                {
                                   priceoptions.map((data)=>{
                                     return <option value={data}>{data}</option>
                                   })
                                }
                            </select>
                            <div className="d-inline">Total Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
