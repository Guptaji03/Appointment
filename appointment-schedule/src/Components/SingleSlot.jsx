import React, { useEffect, useState } from "react";
import style from "../Css/slot.module.css";

const SingleSlot = ({ time, setValue, slots }) => {
  const [check, setCheck] = useState(false);
 
  useEffect(() => {
    if (slots.filter((slot) => slot.startTime === time).length !== 0) {
      
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [time,slots]);


  return (
    <>
      <div className={style.time}>
        <input
          type="radio"
          name="slot"
          value={time}
          onChange={() => setValue(time)}
          disabled={check}

        />
        {`${time
          .split("")
          .slice(0, time.length - 2)
          .join("")}:${time
          .split("")
          .slice(time.length - 2, time.length)
          .join("")}`}
      </div>
    </>
  );
};

export default SingleSlot;
