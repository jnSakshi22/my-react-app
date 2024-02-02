import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderView from "./Header";

const UserComp = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  console.log(users);
  return (
    <div>
      <HeaderView />

      {users.length > 0 && (
        <ul>
          {users.map((user, idx) => (
            <div key={idx}>
              <Link to={`/details/${user.id}`}>
                <li key={user.id}>{user.name}</li>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserComp;
