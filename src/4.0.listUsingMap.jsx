import ListUsingMap from "./4.1.listUsingMap";
import "./App.css";

function ListUsingMapF() {
  const actors = ["Sakib", " Shoriful Raj", "Jasim", "Rubel"];
  return (
    <div className="newClass">
      <h3>Making list using Map function</h3>
      <ListUsingMap name={"Bappa Raz"}></ListUsingMap>
      {actors.map((actor) => (
        <ListUsingMap name={actor}></ListUsingMap>
      ))}
    </div>
  );
}

export default ListUsingMapF;
