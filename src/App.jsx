import React, { useEffect, useState } from "react";
import { get } from "lodash";
import logo from "./logo.svg";
import "./App.css";

import User from "./User";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCanceled = false;

    if (!isCanceled && loading) {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
        console.log("Data Loaded", json);
      };

      fetchData();
    }

    return () => (isCanceled = true);
  }, [setData, loading]);

  return (
    <div className="App">
      <div className="UsersList">
        <ul>
          {data.map((users) => (
            <li key={users.id}>
              <User user={users} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
