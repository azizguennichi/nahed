import React ,{ useState } from 'react'
import "../sidebar.css"
import {  NavLink } from 'react-router-dom'
import { FaBars ,FaAngleUp, FaAngleDown } from "react-icons/fa"
const VisiteurDashbord = ({ Children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRequestServiceOpen, setIsRequestServiceOpen] = useState(false) 
  const [isRequestReservationOpen, setIsRequestReservationOpen] = useState(false) 

  const toggle =()=> setIsOpen(!isOpen)
  const menuItem =[
    
    {
    path:"/Profile",
       name:"profile",
      icon:< f/>
    },
    {
      path:"/my-services",
       name:"Mes services",
       icon:< f/>
    },
    {
      path:"/my-requests",
       name:"Mes reservation",
       icon:< f/>
    },
    {
       name:"Demander une Reservation",
       icon:< f/>,
       dropdown: [
         { title: "Reserver une chambre de foyer", link: "/bookChambre" },
         { title: " Reserver la salle de reunion", link: "/bookSalle" }
  ]},
    {path:"/autoQuitterReservation",
       name:"Demander une autorisation pour quitter ",
        icon:< f/>,
    },
    {path:"/Logout",
    name:"logout",
   icon:< f/>}
  ]
  const handleRequestServiceHover = () => {
    setIsRequestServiceOpen(true);
  }

  const handleRequestServiceLeave = () => {
    setIsRequestServiceOpen(false);}
    const handleRequestReservationHover = () => {
      setIsRequestReservationOpen(true);
    }
  
    const handleRequestReservationLeave = () => {
      setIsRequestReservationOpen(false);
    }
  
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
        <div className="dropdown">
        <div onMouseEnter={handleRequestServiceHover} onMouseLeave={handleRequestServiceLeave}>
          <NavLink to="#" className="link" activeClassName="active">
            <div className="icon">{isRequestServiceOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="likn_text">Demander un service</div>
          </NavLink>
          {isRequestServiceOpen &&
            <div className="dropdown-content">
              {menuItem[3].dropdown.map((item, index) => (
                <NavLink to={item.link} key={index} className="dropdown-link" activeClassName="active">{item.title}</NavLink>
              ))}
              <div className="dropdown">
        <div onMouseEnter={handleRequestReservationHover} onMouseLeave={handleRequestReservationLeave}>
          <NavLink to="#" className="link" activeClassName="active">
            <div className="icon">{isRequestReservationOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="likn_text">Demander unr reservation</div>
          </NavLink>
          {isRequestReservationOpen &&
            <div className="dropdown-content">
              {menuItem[3].dropdown.map((item, index) => (
                <NavLink to={item.link} key={index} className="dropdown-link" activeClassName="active">{item.title}</NavLink>
              ))}
            </div>
}
        </div>
      </div>
            </div>
          }
        </div>
      </div>
      </div>
      <main> { Children}</main>
    </div>
       
      
  )
}

export default VisiteurDashbord;