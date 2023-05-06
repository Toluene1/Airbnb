import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import httpClient from "../../Services/httpclient";
import  './Property.css'
import { FaAngleLeft } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";

const Property =()=>{
const[property,setproperty]= useState({})
const [loading,setloading]= useState(false)
const {id}= useParams()
let isMounted = true
 useEffect(() => { 
    const FetchProperty = async () => {
      try { 
        setloading(true);
        const response = await httpClient.get(
          `property/property/${id}`,
        );
        setproperty(response.data.prop);
        setloading(false);
      } catch (error) {
        setproperty({});
        setloading(true);

        console.log(error.response.data.msg);
      }
    };

    if (isMounted) {
      FetchProperty();
    }
    return () => {
      isMounted = false;
    };
  }, []);

return <>
<Navbar/>
<nav className=" propertyi ">
<div className="d-flex  justify-content-between align-items-center " >
<Link to={'/'}>
 <p className="fs-5 mt-1"> <FaAngleLeft/></p>
 </Link>
<h6 className="mx-3">Homes </h6>
</div>


<div className="d-flex justify-content-between  align-items-center">
<p><FiShare/></p>
<p className="mx-4">
 <GiSelfLove/>
</p>
</div>
</nav>
</>
 

}
export default Property