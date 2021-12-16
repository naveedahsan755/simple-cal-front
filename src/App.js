import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

import Heading from "./components/Heading";
import Display from "./components/Display";
import Input from "./components/Input";

function App() {
  const [mode, setMode] = useState("dark");
  const [result, setResult] = useState("0");
  const [op1, setOp1] = useState(null);
  const [op2, setOp2] = useState(null);
  const [op, setOp] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("mode") !== null) {
      setMode(localStorage.getItem("mode"));
    } else {
      localStorage.setItem("mode", "dark");
    }
  }, [mode]);

  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    } else if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  };

  const calcResult = async () => {
    switch (op) {
      case "P":
        const res = await axios.post(
          "https://simple-cal-back.herokuapp.com/api/perc",
          {
            op1,
            op2,
          }
        );
        console.log(res);
        break;

      case "+":
        alert(op2);
        setResult(+op1 + +op2);
        setOp1(null);
        setOp2(null);
        break;

      default:
        console.log("Invalid operator");
    }
  };

  const setDisplay = (val) => {
    let res = "0";
    switch (val) {
      case "C":
        setResult("0");
        break;

      case "0":
        if (result === "0") {
          res = val;
        } else {
          res = result + val;
        }
        setResult(res);
        break;

      case ".":
        if (!result.includes(".")) {
          res = result + val;
          setResult(res);
        }
        break;

      case "P":
        setOp1(result);
        setOp("P");
        setResult("0");
        break;

      case "+":
        setOp1(result);
        setOp("+");
        setResult("0");
        break;

      case "-":
        setOp1(result);
        setOp("-");
        setResult("0");
        break;

      case "*":
        setOp1(result);
        setOp("*");
        setResult("0");
        break;

      case "/":
        setOp1(result);
        setOp("/");
        setResult("0");
        break;

      case "=":
        setOp2(result);
        calcResult();
        break;

      default:
        if (result === "0") {
          res = val;
        } else {
          res = result + val;
        }
        setResult(res);
    }
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={mode === "dark" ? "dark.css" : "light.css"}
        ></link>
      </Helmet>

      <div className="container-fluid box">
        <Heading mode={mode} changeMode={changeMode} />
        <Display result={result} />
        <Input setDisplay={setDisplay} />
      </div>
    </>
  );
}

export default App;
