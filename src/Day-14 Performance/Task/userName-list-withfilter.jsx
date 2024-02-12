import { useEffect, useMemo, useState } from "react";

const UserNameFilter = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const cardSize = "320px";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
        // Error
      });
  }, []);

  const filteredData = useMemo(() => {
    const filteredList = userData.filter((item) => {
      // item.title.toLowerCase().search(search.toLowerCase())

      const searchLc = search.toLowerCase();
      const currentWordLC = item.name.toLowerCase();

      return currentWordLC.search(searchLc) !== -1;
    });

    return filteredList;
  }, [search, userData]);
  return (
    <div>
      <h1>Users List</h1>
      <hr />

      <div>
        <input
          style={{
            padding: "12px",
            marginBottom: "16px",
            backgroundColor: "#e9e9e9",
          }}
          type="search"
          placeholder="Search your product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredData.map((item) => {
          return <li>Name:- {item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserNameFilter;
