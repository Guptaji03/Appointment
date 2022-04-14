import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "../connection";
import style from "../Css/Details.module.css";
const Details = () => {
  const { id } = useParams();
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    axios.get(`${url}/slot?doctor=${id}`).then((data) => {
      setSlots(data.data);
    });
  });

  return (
    <div className={style.main}>
      <h1>Booked slots</h1>
      {slots.map((slot) => {
        return (
          <div className={style.doctor_Card} key={slot._id}>
            <div>
              <h1> {slot.client}</h1>
            </div>
            <h3>Phone : {slot.mobile}</h3>
            <div className={style.buttons}>
              <button disabled>
                {slot.startTime
                  .split("")
                  .slice(0, slot.startTime.length - 2)
                  .join("") +
                  ":" +
                  slot.startTime
                    .split("")
                    .slice(slot.startTime.length - 2, slot.startTime.length)
                    .join("")}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
