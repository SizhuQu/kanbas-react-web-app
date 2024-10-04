import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to="/Account/Signin">Sign in</Link>
      <Link to="/Account/Signup">Sign up</Link>
      <Link to="/Account/Profile">Profile</Link>
    </div>
  );
}



