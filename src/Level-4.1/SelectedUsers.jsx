import HeaderView from "./Header";

const SelectedUsers = () => {
  let selectedUser = JSON.parse(localStorage.getItem("selected"));
  console.log(selectedUser);
  return (
    <>
      <HeaderView />
      <h2>Selected User List</h2>
      {selectedUser.map((obj) => {
        return <h3 key={obj.id}>{obj.name}</h3>;
      })}
    </>
  );
};

export default SelectedUsers;
