
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = ({user, logoutHandler}) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  

  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold">Луковые Новости</Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Домашняя страница
            </Link>
            <Link to="/news" className={`nav-link ${isActive('/news') ? 'active' : ''}`}>
              Новости
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/profile">{user.data ? user.data.name : "Гость"}</Link>
          </Button>
          <Button asChild>
            <Link onClick={logoutHandler} to="/login">Выйти</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
