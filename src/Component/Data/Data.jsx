import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Data = () => {
  const [mark, setMark] = useState([]);
  useEffect(() => {
    axios.get("js/DataYareen.json").then((res) => {
      setMark(res.data.student);
    });
  }, []);
  const ListData = mark.map((items) => {
    return (
      <div key={items.id}>
        <p>Arabic degree: {items.Arabic}</p>
        <p> English degree:{items.English}</p>
      </div>
    );
  });
  return (
    <div>
      <input type="text" placeholder="Search ..." />
      <div> {ListData}</div>
    </div>
  );
};

export default Data;
