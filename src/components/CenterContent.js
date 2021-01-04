import React from 'react'
import img from "../assests/img1.jpg"
import Image from 'react-bootstrap/Image'
import '../imageOver.css'
import RequestForm from './RequestForm'
import ReactTyped from './ReactTyped'
const CenterContent = () => {
    return (
        <div>
         <div className="containerr">
  <Image src={img} alt="Nature" style={{width:"100%",height:'00%'}} />
  <div className="text-block">
  <ReactTyped />

             </div>
<div className="form-block" >
  <RequestForm />

</div>
  
</div>
{/* <div style={{marginLeft:"60rem" ,marginTop:"-50rem" ,position:"relative"}}>

<RequestForm/>
</div> */}
{/*  
        <Image src={img}  className="container-fluid"/>
              <ReactTyped />
        
               */}
        </div>
    )
}

export default CenterContent
