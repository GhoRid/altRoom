import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
