import React, { useState } from "react";
import Calendar from "react-calendar";
import Popup from "./popup";
import "./calander.css";

export default function MyCalander() {
  const [value, setValue] = useState(new Date());
  const [condition, setCondition] = useState(false);
  const sendDataToParent = (childData) => {
    if (childData === "closed") {
      setCondition(false);
    }
  };

  const onChange = (data) => {
    setValue(data);
    setCondition(true);
  };
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      {condition && (
        <Popup
          sendDataToParent={sendDataToParent}
          date={JSON.stringify(value)}
        />
      )}
    </div>
  );
}
