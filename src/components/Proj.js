import React from "react";
import {useEffect,useState} from 'react'
import axios from "axios";
import Proj2 from "./proj2";
const Mydata=()=>{
const [res,setRes]=useState([])
const [name,setName]=useState([])
useEffect(()=>{
    getData()
},[])


const getData = async()=>{
   await axios.get("https://reqres.in/api/users?page=2")
  .then((response)=>{
    const mydata=response.data;
    setRes(mydata.data)
    console.log("data",mydata)
  })
  
}
const searchByName= async ()=>{
  
}
    return(
  <>
 
     {
        // JSON.stringify(res)
        res.length > 0 && (
            res.map((it,index)=>{
                return(
                    //  <div style={{ display:"flex",flexDirection:"column",flexWrap:"nowrap"}}>
                    // <div style={{height:"200px" ,width:"200px",display:"flex"}}>
                    //     <img  src={it.avatar}/>
                    //       <h3>{it.first_name}</h3>
                    //       <h4>{it.id}</h4>
                    // </div>
                    //  </div>
                    <Proj2 name={it.first_name} id={it.id} image={it.avatar}/>
                 
                )
            })
        )
     }
  </>
    )
}
export default Mydata;