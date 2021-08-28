function ModelComponent(props) {
  return (
    <div className="modelContainer">
      <div>
        <div style={{ fontSize: "50px" }}>{props.message}</div>
        <div>
          <button onClick={props.confirmReset}>Yes</button>
          <button onClick={props.closeModel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ModelComponent;
