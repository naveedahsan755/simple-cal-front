import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Heading from "./components/Heading";
import Display from "./components/Display";
import Input from "./components/Input";

function App() {
  const [mode, setMode] = useState("dark");

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
        <Display />
        <Input />
      </div>
    </>
  );
}

export default App;
