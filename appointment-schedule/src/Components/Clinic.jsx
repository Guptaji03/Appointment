import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Css/Clinic.module.css";
const Clinic = ({ clinic }) => {
  const navigate = useNavigate();

  return (
    <div className={style.clinic_card}>
      <img src={clinic.image} alt="clinicphoto" />
      <div>
        <h2>{clinic.name}</h2>
        <p className={style.address} >{clinic.address}</p>
        <button onClick={() => navigate(`/clinic/${clinic._id}`)}>Book</button>
      </div>
    </div>
  );
};

export default Clinic;
