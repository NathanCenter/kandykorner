import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"

export const Location = () => {
    // the useState returns a array
const [location, setLocation]=useState([])
//takes two argements a function and an array this is working like an event lestener
useEffect(
    ()=>{
        fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then((locationArray)=>{
            setLocation(locationArray)
        })
    },
    []
)
    return (
        <>
        
        <h1>Kandy Korner Shop</h1>

        {
            location.map((locationObject)=>{
                return <p>store location:<Link to={`/locations/${locationObject.id}`}>{locationObject.address}</Link></p>

            })
        }
        </>                                  
         
    )
   
}