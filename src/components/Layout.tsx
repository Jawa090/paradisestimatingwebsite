import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SEOHead from './SEOHead';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <SEOHead />
    </div>
  );
};

export default Layout; 