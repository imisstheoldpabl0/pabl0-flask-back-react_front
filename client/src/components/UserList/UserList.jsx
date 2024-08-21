import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import UserCard from "./UserCard/UserCard";

const UserList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const url = "http://127.0.0.1:8080/api/user";
        const response = await axios.get(url);
        let users = response.data.data;

        console.log(users);

        setCards(users
          .map(i => i));

      } catch (e) {
        setCards([]); // No pintes nada
        console.log("CATCH");
      }
    }

    fetchData();
  }, []); // cuando hay un cambio en la ciudad se vueve a ejecutar el useEffect

  const paintCards = () => {
    return cards.length !== 0
      ? cards.map((card, index) => {
          return (
            <UserCard
            key={card[0]}
            username={card[1]}
            />
            
          );
        })
      : "";
  };

  /* const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/user");
    console.log(response.data.data);
  };
  fetchAPI(); */

  return (
    <div id="user-list">
      <h1>UserList</h1>
      {paintCards()}
    </div>
  );
};

export default UserList;
