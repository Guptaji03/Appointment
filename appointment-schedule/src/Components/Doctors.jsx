import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import style from "../Css/Doctor.module.css";
import Doctorcard from "./Doctorcard";
import style from "../Css/Doctors.module.css";

const Doctors = () => {
  const { id } = useParams();
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    axios.get(`/doctor?clinic=${id}`).then((data) => {
      setDoctors(data.data);
    });
  }, [id]);

  return (
    <div className={style.doctors_main}>
      {doctors.map((doctor) => (
        <Doctorcard doctor={doctor} />
      ))}
    </div>
  );
};

export default Doctors;

// <div className={style.doctor_Card} key={doctor._id}>
//   <div>
//     <h1>Dr. {doctor.name}</h1>
//     <p className={style.degree}>{doctor.degree} {doctor.speciality}  </p>
//   </div>
//   <div className={style.buttons}>
//     <button disabled>Rs.{doctor.fee}</button>
//     <button onClick={() => navigate(`/details/${doctor._id}`)}>More Details</button>
//     <button onClick={() => navigate(`/doctor/${doctor._id}`)}>
//       Book Slot
//     </button>
//   </div>
// </div>
