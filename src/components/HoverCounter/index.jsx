const HoverCounter = (props) => {
  return (
    <div>
      <h1>Hover Counter</h1>
      <p>
        Count : {props.count}{" "}
        <button onMouseOver={() => props.incrementCount()}>Hover</button>
      </p>
    </div>
  );
};

export default HoverCounter;
