import React from "react";
import axios from "axios";
import JsonData from "./DataYareen.json";
import { useEffect, useState } from "react";
const Data = () => {
  const [searchItem, setSeacrch] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSeacrch(event.target.value);
        }}
      />
      {JsonData.filter((val) => {
        if (searchItem == "") {
          return val;
        } else if (
          val.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>
              {val.name}
              <br />
              <p>{val.Degree}</p>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
