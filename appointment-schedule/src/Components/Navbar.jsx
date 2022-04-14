import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Css/Navbar.module.css"
const Navbar = () => {
    const navigate = useNavigate()
  return (
      
    <div className={style.navbar}>
       
            <img src="https://scontent.fdel35-1.fna.fbcdn.net/v/t1.18169-1/27332035_1663768760350892_8286799775255329103_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=-pjSRvqiPTEAX9RyAj_&_nc_ht=scontent.fdel35-1.fna&oh=00_AT9dLb-vxAntsb19hAOOJ-GDumgCzvQQJ_bzXv04_YBo8A&oe=627AAADC" alt="" onClick={()=>navigate("/")}/>
        
        <div onClick={()=>navigate("/")}>
          <h5>  Apollo <br />
          HOSPITALS </h5>
           
        </div>
      
    </div>
  )
}

export default Navbar
