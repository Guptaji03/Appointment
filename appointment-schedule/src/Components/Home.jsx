import React, { useLayoutEffect, useState } from "react";
import Clinic from "./Clinic";
import axios from "axios";
import style from "../Css/Home.module.css";
const Home = () => {
  const [clinics, setClinics] = useState([]);

  useLayoutEffect(() => {
    axios.get("/clinic").then((data) => setClinics(data.data));
  }, []);
  return (
    <div className={style.home_container}>
      {clinics.map((clinic) => {
        return <Clinic clinic={clinic} key={clinic._id} />;
      })}
    </div>
  );
};

export default Home;
