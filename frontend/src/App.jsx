import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/api/appliances")
    fetch("/api/appliances")
      .then((res) => res.json())
      .then((data) => setList(data));
  });
  return (
    <>
      <ul>
        {list.map((obj, index) => (
          <li key={index}>{obj.appliance_name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
