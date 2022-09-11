import React, { useEffect, useState } from "react";
import { getAdvices } from "../Utils/axios";

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
      <p>{advice}</p>
      <button
        onClick={() =>
          getAdvices().then((res) => {
            setAdvice(res.data.slip.advice);
            setId(res.data.slip.id);
          })
        }
      >
        Clic
      </button>
    </div>
  );
};

export default Advice;
