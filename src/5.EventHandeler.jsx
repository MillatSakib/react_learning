import "./App.css";

function HandelClick() {
  return (
    <div className="newClass">
      <h3>Function Call</h3>
      <button onClick={handelClick}>Type one</button>
      <button
        onClick={() => {
          alert("Second Button Clicked");
        }}
      >
        Type Two
      </button>
      <button
        onClick={() => {
          handelClick(10);
        }}
      >
        Type Three
      </button>
    </div>
  );
}

function handelClick(e, addFive = 5) {
  // alert("button clicked" + addFive);
  console.log(addFive);
}

export default HandelClick;
