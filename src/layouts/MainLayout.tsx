import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  // const prevPathRef = useRef(pathname);

  // useEffect(() => {
  //   const key = `scrollPosition:${pathname}`;
  //   const savedY = sessionStorage.getItem(key);

  //   if (prevPathRef.current === pathname && savedY !== null) {
  //     // 같은 path에서 새로고침된 경우: 이전 스크롤 위치 복원
  //     window.scrollTo(0, parseInt(savedY, 10));
  //   } else if (prevPathRef.current !== pathname) {
  //     // path가 바뀐 경우: 항상 맨 위로
  //     window.scrollTo(0, 0);
  //   }

  //   const handleScroll = () => {
  //     sessionStorage.setItem(key, String(window.scrollY));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     prevPathRef.current = pathname;
  //   };
  // }, [pathname]);

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
