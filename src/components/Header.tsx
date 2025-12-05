import styled from "styled-components";
import { ReactComponent as MenuBar } from "../assets/svgs/menu.svg";
import { ReactComponent as AltRommTextLogo } from "../assets/svgs/altRommTextLogo.svg";
import { ReactComponent as CartIcon } from "../assets/svgs/cart.svg";
import { ReactComponent as MyPageIcon } from "../assets/svgs/mypage.svg";
import SideMenu from "./SideMenu";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const isTransparent = location.pathname === "/";
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const prevScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - prevScroll.current) < 1) return;

      if (currentScroll > prevScroll.current && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setIsScrolledDown(currentScroll > 0);

      prevScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  return (
    <Container
      $transparent={isTransparent}
      $visible={visible}
      $forceDark={isScrolledDown}
    >
      <Left onClick={() => setIsSideMenuOpen((prev) => !prev)}>
        <AnimatedIconWrapper $isSideOpen={isSideMenuOpen}>
          <MenuBar className="icon menu" />
        </AnimatedIconWrapper>
      </Left>

      <CenterButton
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <LogoBox>
          <AltRommTextLogo />
        </LogoBox>
      </CenterButton>
      <Right>
        <CartButton
          // href="https://docs.google.com/forms/d/e/1FAIpQLSdLV0LnWhqt08wUyquXRh9BbdExLR2SFbikK6MvbdoJHp9D0w/viewform?usp=sharing&ouid=104079005027954510150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CartIcon />
        </CartButton>
        <MyPageIcon />
      </Right>

      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header<{
  $transparent: boolean;
  $visible: boolean;
  $forceDark?: boolean;
}>`
  width: 100vw;
  height: 80px;
  padding: 0 16px;
  z-index: 99;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;

  background: ${({ $transparent, $forceDark }) =>
    $forceDark ? "#fff" : $transparent ? "transparent" : "#fff"};

  color: ${({ $transparent, $forceDark }) =>
    $transparent && !$forceDark ? "#fff" : "#000"};

  transition: all 0.3s ease;

  border-bottom: ${({ $transparent, $forceDark }) =>
    $transparent && !$forceDark ? "none" : "1px solid #ebedf1"};

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

const Left = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const AnimatedIconWrapper = styled.div<{ $isSideOpen: boolean }>`
  position: relative;
  width: 28px;
  height: 28px;

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    width: 100%;
    height: 100%;
  }

  .menu {
    opacity: ${({ $isSideOpen }) => ($isSideOpen ? 0 : 1)};
    transform: ${({ $isSideOpen }) =>
      $isSideOpen ? "scale(0.8) rotate(90deg)" : "scale(1)"};
  }

  .close {
    opacity: ${({ $isSideOpen }) => ($isSideOpen ? 1 : 0)};
    transform: ${({ $isSideOpen }) =>
      $isSideOpen ? "scale(1)" : "scale(0.8) rotate(-90deg)"};
  }
`;

const CenterButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;

  svg {
    height: 100%;
    width: auto;
    display: block;
  }
`;
const LogoBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  gap: 20px;

  svg {
    width: 26px;
    height: 26px;
    display: block;
  }
`;

const CartButton = styled.a`
  @media (max-width: 550px) {
    display: none;
  }
`;
