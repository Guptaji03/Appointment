import React, { useEffect, useState } from "react";
import style from "../Css/slot.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import SingleSlot from "./SingleSlot";
const Slot = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [value, setValue] = useState("");
  const [slots, setSlots] = useState([]);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/doctor/${id}`).then((data) => {
      var difference = +data.data.endTime - +data.data.startTime;
      var start = +(data.data.startTime + "00");
      var time = 0;
      for (var i = 0; i < difference * 3; i++) {
        var final = "";
        if (String(start + time).length === 3) {
          final = String("0" + String(start + time));
        } else {
          final = String(start + time);
        }
        arr.push(final);
        time += 20;
        if (time === 60) {
          time = 0;
          start += 100;
        }
      }
      setArr([...arr]);
    });

    axios.get(`/slot?doctor=${id}`).then((data) => {
      setSlots(data.data);
    });
  }, []);

  const handlebooking = () => {
if(!name.trim() || !number || !value || number.length!==10){
   alert("Fill the Data Carefully")
}
else{
  axios
  .post("/slot", {
    doctor: id,
    client: name,
    mobile: number,
    startTime: value,
  })
  .then((data) => {
    alert("successfully booked the slot");
    navigate("/");
  });
}
   
  };

  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.inset}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="number">Phone : </label>
        <input
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        </div>
      </div>
      <div className={style.container} >
     
        <div className={style.slot_Card}>
        
              {arr.map((time, index) => (
                <SingleSlot
                  key={index}
                  time={time}
                  setValue={setValue}
                  slots={slots}
                />
              ))}
          
        </div>
        <br />
        <button className={style.back} onClick={()=>navigate(-1)}> Back</button>
        <button onClick={handlebooking} className={style.btn}>
          Book
        </button>
      </div>
    </div>
  );
};

export default Slot;
