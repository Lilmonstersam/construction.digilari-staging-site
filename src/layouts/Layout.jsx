import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import StickyTOC from '../components/StickyTOC';
import Breadcrumbs from '../components/Breadcrumbs';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ position: 'relative' }}>
        <Breadcrumbs />
        <StickyTOC />
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default Layout;
