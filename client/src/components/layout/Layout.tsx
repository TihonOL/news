import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SpinnerUi from '../ui/spinnerUi'

const Layout = ({ logoutHandler, user }) => {
  
  return (
    <>
      {user.status === 'fetching' ? (
        <div className="min-h-screen flex flex-col">
          <Navbar logoutHandler={logoutHandler} user={user} />
          <main className="flex-1 content-container">
            <SpinnerUi/>
          </main>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col">
          <Navbar logoutHandler={logoutHandler} user={user} />
          <main className="flex-1 content-container">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
};

export default Layout;
