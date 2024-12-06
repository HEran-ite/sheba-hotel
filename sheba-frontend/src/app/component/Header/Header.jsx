import "./header.styles.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../../features/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logoutUser());
    dispatch(reset());
  };
  return (
    <header className="main-header">
      <div className="container">
        <Link to ="/">
          <div className="logo">sheba</div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/room/create">create</Link>
              <button onClick={handleLogout}> Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
