import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";


const MyCard = () => {
   const[myCards,setMyCards]=useState([]);

   useEffect(()=>{
fetch('http://localhost:5000/cards')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setMyCards(data)
})
   },[])
    return (
        <div>
            <div className="container w-[95%] justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                {
                  myCards.map(myCard=> <Cards key={myCard._id} myCard={myCard}></Cards>)  
                }
            </div>
        </div>
    );
};

export default MyCard;