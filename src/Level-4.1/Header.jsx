import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";

const HeaderView = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Link to="/">Home</Link>
      <Link to="/selected">Selected Users </Link>
      <Link to="/rejected">Rejected Users</Link>
    </div>
  );
};
export default HeaderView;
