const ClickCounter = ({ count, incrementCount, text }) => {
  return (
    <div>
      <h1>{text} Counter</h1>
      <p>
        Count : {count} <button onClick={() => incrementCount()}>Click</button>
      </p>
    </div>
  );
};

export default ClickCounter;
