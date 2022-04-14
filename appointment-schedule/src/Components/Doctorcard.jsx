import React from "react";
import style from "../Css/Doctorcard.module.css";
import { GoLocation } from "react-icons/go";
import { FaLanguage } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Doctorcard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.image}>
        <img src={doctor.image} alt="not found" />
        <h4>Fee:- Rs.{doctor.fee}</h4>
      </div>
      
      <div className={style.name}>
        <div className={style.line}>
          <h3>Dr.{doctor.name}</h3>
          <p>
            {doctor.speciality} | {doctor.experience} yrs.
          </p>
        </div>
        {/* <div className={style.line}></div> */}
        <p>
          <GoLocation /> {doctor.clinic.address}
        </p>
        <p>
          <FaLanguage /> {doctor.language}
        </p>
        <p>
          <HiAcademicCap /> {doctor.degree}
        </p>
      </div>
      <div className={style.appointment}>
        <div className={style.first}>
          <h4>Mon-Sat</h4>({doctor.startTime}hr. -{doctor.endTime}hr.)
          <br />
        </div>
        <div className={style.second}>
          <button onClick={() => navigate(`/details/${doctor._id}`)}>
            Booked Slots
          </button>
          <br />
          <button onClick={() => navigate(`/doctor/${doctor._id}`)}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctorcard;
