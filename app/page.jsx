"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const page = () => {
  const [todos, setTodos] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api");
  //       const data = await response.json();
  //       setTodos(data);
  //     } catch (error) {
  //       console.error("Error occurred:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleChangeUser = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePw = (e) => {
    setPassword(e.target.value);
  };

  const postData = async (userName) => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <form>
        <label>Username: </label>
        <input
          type="text"
          value={userName}
          onChange={handleChangeUser}
          className="bg-orange-200"
        />
        <label>Password: </label>
        <input
          type="text"
          value={password}
          onChange={handleChangePw}
          className="bg-orange-200"
        />
      </form>
      <button
        onClick={() => {
          postData(userName);
        }}
        disabled={!userName}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save to Database
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
