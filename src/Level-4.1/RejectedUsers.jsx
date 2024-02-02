import HeaderView from "./Header";

const RejectedUsers = () => {
  let rejectedUser = JSON.parse(localStorage.getItem("rejected"));
  console.log(rejectedUser);
  return (
    <>
      <HeaderView />
      <h2>Rejected User List</h2>
      {rejectedUser.map((obj) => {
        return <h3 key={obj.id}>{obj.name}</h3>;
      })}
    </>
  );
};

export default RejectedUsers;
