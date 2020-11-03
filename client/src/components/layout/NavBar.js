import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Fragment } from 'react';

const NavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const authLinks = (
    <ul>
      <li>
        <a href='#!' onClick={() => dispatch(logout())}>
          <i className='fas fa-sign-out-alt'>
            <span className='hide-sm'>Logout</span>
          </i>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href='#!'>Developers</a>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> DevConnector
        </Link>
      </h1>
      {!auth.loading && <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};

export default NavBar;
