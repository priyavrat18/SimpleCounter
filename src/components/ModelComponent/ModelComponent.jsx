function ModelComponent(props) {
  return (
    <div className="modelContainer">
      <div>
        <div>{props.message}</div>
        <div>
          <button onClick={props.confirmReset}>Yes</button>
          <button onClick={props.closeModel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ModelComponent;
