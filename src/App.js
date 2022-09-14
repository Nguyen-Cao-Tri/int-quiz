/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import "./App.css";

import Advisor from "./components/Advisor/Advisor";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => {
        return res.json();
      })
      .then((db) => {
        db.advisorProfileCollection.items.map(item=>{
          const random = Math.floor(Math.random() * 2)
          if(random===0){
            return item.status="online"
          }
          return item.status="offline"
        })
        setData(db.advisorProfileCollection.items);
      });
  }, []);
  return (data.length > 0 && <Advisor items={data} />);
}

export default App;