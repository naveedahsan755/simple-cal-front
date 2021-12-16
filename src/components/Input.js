const Input = () => {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-6 p-0">
          <button className="btn">C</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u0025"}</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u00F7"}</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn">7</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">8</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">9</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u00D7"}</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn">4</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">5</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">6</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u2212"}</button>
        </div>
      </div>

      <div className="row">
        <div className="col-3 p-0">
          <button className="btn">1</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">2</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">3</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u002B"}</button>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-0">
          <button className="btn">0</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u2219"}</button>
        </div>
        <div className="col-3 p-0">
          <button className="btn">{"\u003D"}</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
