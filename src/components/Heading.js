const Heading = ({ mode, changeMode }) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-xs-4 col-sm-6 col-md-8">&nbsp;</div>
        <div className="col-xs-8 col-sm-6 col-md-4">
          <button
            className="btn"
            onClick={changeMode}
            style={{
              color: `${mode === "dark" ? "#eee" : "#333"}`,
              backgroundColor: `${mode === "dark" ? "#333" : "#eee"}`,
            }}
          >
            {mode === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="display-3">Calculator</h1>
        </div>
      </div>
    </>
  );
};

export default Heading;
