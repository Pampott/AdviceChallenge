import React, { useEffect, useState } from "react";
import { getAdvices } from "../Utils/axios";
import PatternDivider from "../Utils/images/pattern-divider-desktop.svg";
import "./Advice.css";

const Advice = () => {
  const [id, setId] = useState();
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    getAdvices().then((res) => {
      setAdvice(res.data.slip.advice);
      setId(res.data.slip.id);
    });
  }, []);
  return (
    <div className="advice-content">
      <h1>Advice #{id}</h1>
      <p>"{advice}"</p>
      <img src={PatternDivider} alt="" />
      <button
        onClick={() =>
          getAdvices().then((res) => {
            setAdvice(res.data.slip.advice);
            setId(res.data.slip.id);
          })
        }
      >
        <div className="square">
            <div className="dot first"></div>
            <div className="dot second"></div>
            <div className="dot third"></div>
            <div className="dot fourth"></div>
            <div className="dot fifth"></div>
        </div>
      </button>
    </div>
  );
};

export default Advice;
