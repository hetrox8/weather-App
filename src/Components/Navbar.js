import { NavLink, Outlet, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiArrowLeft } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <NavLink to="/">
        {location.pathname !== '/' && <FiArrowLeft />}
      </NavLink>

      <Outlet />
    </div>
  );
}

export default Navbar;
