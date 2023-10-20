import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";


const Deliver = () => {
    const[delivers,setDelivers]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/delivers')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDelivers(data)
        })
    },[])
    return (
        <div className="container w-[95%] justify-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
                delivers.map(deliver=><div className="card w-72 " key={deliver._id}>
                <figure >
                  <img src={deliver.image} alt="Shoes" className=" w-20 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{deliver.title}</h2>
                  <p>{deliver.body}</p>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default Deliver;