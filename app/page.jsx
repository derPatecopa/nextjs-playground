"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const page = () => {
  const [todos, setTodos] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setUserName(e.target.value);
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
        <input type="text" value={userName} onChange={handleChange} />
        <p>{userName}</p>
      </form>
      <button
        onClick={() => {
          postData(userName);
        }}
        disabled={!userName}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Press me
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
