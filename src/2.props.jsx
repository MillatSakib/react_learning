import "./App.css";

function Props() {
  return (
    <div className="newClass">
      <div>This is new section of Props</div>
      <BasicProps name="Laptop" brand="Walton" price="29000"></BasicProps>
      <BasicProps name="mobile" brand="Realme" price="12000"></BasicProps>
      <Student name="Md. Sohan Millat Sakib" grade="3.09"></Student>
    </div>
  );
}

function BasicProps(props) {
  return (
    <div>
      <h3>
        This is a {props.name} of brand {props.brand}. The price of this{" "}
        {props.name} is {props.price}TK.
      </h3>
    </div>
  );
}

function Student({ name, grade }) {
  //Here I use destructuring method
  return (
    <div>
      <h3>
        The student name is {name} and he get {grade}
      </h3>
    </div>
  );
}

export default Props;
