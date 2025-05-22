
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({logoutHandler, user}) => {

  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 content-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
