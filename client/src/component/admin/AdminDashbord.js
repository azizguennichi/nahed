import React ,{ useState } from 'react'
import "../sidebar.css"
import {  NavLink } from 'react-router-dom'
import { FaBars} from "react-icons/fa"
const AdminDashbord = ({ Children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle =()=> setIsOpen(!isOpen)
  const menuItem =[
    
    {
      path:"/Profile",
       name:"profile",
      icon:< f/>
    },{
      path:"/Emploi",
       name:"emploi",
       icon:< f/>
    },
    {
      path:"/my-services",
       name:"mayServices",
       icon:< f/>
    },
    {
      path:"/my-requests",
       name:"myRequests",
       icon:< f/>
    },
    {
      path:"/request-reservation",
       name:"requestReservation",
       icon:< f/>
    },
    {
      path:"/request-service",
       name:"requestService",
        icon:< f/>
    },
    {path:"/Logout",
       name:"logout",
      icon:< f/>}
  ]
  return (
    <div clclassName="container">
      <div  style={{width:isOpen?"250px":"50px"}} className="sidebar">
        <div className="top_section">
           <h1 style={{display:isOpen?"block":"none"}} className="logo">logo</h1>
              <div style={{marginLeft:isOpen?"50px":"0px"}}className="bars">
              <FaBars onClick ={toggle}/>
              </div>
        </div>
           { menuItem.map((item,index)=>(
         <NavLink to={item.path}key={index}className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{display:isOpen?"block":"none"}}className="likn_text">{item.name}</div>
        </NavLink>))} 
      </div>
      <main> { Children}</main>
    </div>
       
      
  )
}

export default AdminDashbord;