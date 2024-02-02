import { useState } from "react";

const HobbiesFunc = () => {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: "Music" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Food" },
    { id: 5, name: "Reels watching" },
  ]);

  const onRemoveHobby = (id) => {
    setHobbies((prevState) => {
      return prevState.filter((padosiKiHobby) => padosiKiHobby.id !== id);
    });
  };

  return (
    <div>
      <ul>
        {hobbies.map((hobby) => {
          return (
            <li
              key={hobby.id}
              style={{ display: "flex", gap: "6px", alignItems: "center" }}
            >
              <p>{hobby.name}</p>
              <button onClick={() => onRemoveHobby(hobby.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HobbiesFunc;
