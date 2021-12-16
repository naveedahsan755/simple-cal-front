const Input = ({ setDisplay }) => {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-6 p-0">
          <button className="btn" onClick={() => setDisplay("C")}>
            C
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("P")}>
            {"\u0025"}
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("/")}>
            {"\u00F7"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("7")}>
            7
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("8")}>
            8
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("9")}>
            9
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("*")}>
            {"\u00D7"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("4")}>
            4
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("5")}>
            5
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("6")}>
            6
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("-")}>
            {"\u2212"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("1")}>
            1
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("2")}>
            2
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("3")}>
            3
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("+")}>
            {"\u002B"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-0">
          <button className="btn" onClick={() => setDisplay("0")}>
            0
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay(".")}>
            {"\u2219"}
          </button>
        </div>
        <div className="col-3 p-0">
          <button className="btn" onClick={() => setDisplay("=")}>
            {"\u003D"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
