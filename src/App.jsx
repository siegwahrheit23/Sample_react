import React, { useEffect, useState } from "react";
import { get } from "lodash";
import "./App.css";

import User from "./User";
import IconField from "./IconField";

const App = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let isCanceled = false;

    if (!isCanceled && loading) {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setData(json);
        setDisplayData(json);
        setLoading(false);
        console.log("Data Loaded", json);
      };

      fetchData();
    }

    return () => (isCanceled = true);
  }, [setData, setDisplayData, loading]);

  const searchFilter = () => {
    if (search === "") {
      setDisplayData(data);
    } else {
      setDisplayData(
        data.filter((user) => {
          return (
            get(user, "name", "")
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            get(user, "email", "").toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    }

    console.log("SearchFilter", displayData);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      searchFilter();
    }
  };

  return (
    <div className="App">
      <div className="Search">
        <input
          className="SearchInput"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(get(e, "target.value", ""));
          }}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        />
        <div className="SearchIcon">
          <button onClick={searchFilter}>
            <IconField type="search" />
          </button>
        </div>
      </div>

      <div className="UsersList">
        <ul>
          {displayData.map((users) => (
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
