
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(res => {
      res.json()
    })
    .catch(error => {
      console.error(error);
    })
  }

    const navItems = <>
        <NavLink to={"/"}><li><a>Home</a></li></NavLink>
        <NavLink to={"/about"}><li><a>About</a></li></NavLink>
        {
          user?.email ?  <>
          <NavLink to={"/bookings"}><li><a>My Bookings</a></li></NavLink>
          <li><button onClick={handleLogOut}>Log out</button></li>
          </>
          : 
          <NavLink to={"/login"}><li><a>Login</a></li></NavLink>
        }
       
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Appointment</button>

        </div>
      </div>
    );
};

export default Navbar;