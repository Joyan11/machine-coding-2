/** @format */
import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMainContext } from "../../context/context";
export const Navbar = () => {
  const { cart } = useMainContext();
  return (
    <nav className="nav nav-primary">
      <div className="nav--logo">
        <p>My Company</p>
      </div>
      <ul className="list nav--list">
        <Link to="/" className="nav-item">
          Products
        </Link>
      </ul>
      <ul className="list nav--list">
        <Link to="/cart" className="nav-item">
          <div className="notification">
            <BiCartAlt className="notification-icon" />
            {cart.length !== 0 && (
              <span className="badge badge--round badge--top badge-primary">
                <p>{cart.length}</p>
              </span>
            )}
          </div>
        </Link>
      </ul>
    </nav>
  );
};
