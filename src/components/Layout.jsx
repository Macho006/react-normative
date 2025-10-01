import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] p-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
