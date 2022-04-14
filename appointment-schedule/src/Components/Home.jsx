import React, { useLayoutEffect, useState } from "react";
import Clinic from "./Clinic";
import axios from "axios";
import style from "../Css/Home.module.css";
import url from "../connection";
const Home = () => {
  const [clinics, setClinics] = useState([]);

  useLayoutEffect(() => {
    axios.get(`${url}/clinic`).then((data) => setClinics(data.data));
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
