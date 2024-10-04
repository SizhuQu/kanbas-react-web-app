import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to="/Account/Signin">Signin</Link> <br />
      <Link to="/Account/Signup">Signup</Link> <br />
      <Link to="/Account/Profile">Profile</Link> <br />
    </div>
  );
}



