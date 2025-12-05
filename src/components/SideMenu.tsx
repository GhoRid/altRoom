import styled from "styled-components";
import { useNavigate } from "react-router";
import { ReactComponent as AltRoomAppLogo } from "../assets/svgs/altRoomAppLogo.svg";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const navigate = useNavigate();

  const mainMenus = [
    { name: "알트룸 자동견적", route: "/estimate" },
    { name: "서비스소개", route: "/service" },
    { name: "기업소개", route: "/company" },
    { name: "시공사례", route: "/construction-cases" },
    { name: "모듈정보", route: "/modules" },
    { name: "마이크루", route: "/company/recruit" },
  ];

  const customerMenus = [
    { name: "쇼룸안내", route: "/customer/showroom" },
    { name: "자주 묻는 질문", route: "/customer/faq" },
    { name: "1:1 채팅문의", route: "/customer/chat" },
    { name: "전화문의", route: "/customer/phone" },
  ];

  const handleClick = (route: string) => {
    navigate(route);
    onClose();
  };

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <SidePanel $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <MenuWrapper>
          <TopRow>
            <LogoWrapper>
              <AltRoomAppLogo />
            </LogoWrapper>
            <CloseButton onClick={onClose} aria-label="close menu">
              &times;
            </CloseButton>
          </TopRow>

          <AuthRow>
            <AuthItem onClick={() => handleClick("/auth/login")}>
              LOG IN
            </AuthItem>
            <AuthItem>SIGN UP</AuthItem>
          </AuthRow>

          <Nav>
            {mainMenus.map((menu) => (
              <MenuItem key={menu.name} onClick={() => handleClick(menu.route)}>
                {menu.name}
              </MenuItem>
            ))}
          </Nav>

          <Divider />

          <SectionTitle>고객센터</SectionTitle>
          <CustomerList>
            {customerMenus.map((menu) => (
              <CustomerItem
                key={menu.name}
                onClick={() => handleClick(menu.route)}
              >
                {menu.name}
              </CustomerItem>
            ))}
          </CustomerList>
        </MenuWrapper>
      </SidePanel>
    </Overlay>
  );
};

export default SideMenu;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  background-color: rgba(0, 0, 0, 0.5);

  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const SidePanel = styled.div<{ $isOpen: boolean }>`
  width: 400px;
  max-width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  color: #000;

  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const LogoWrapper = styled.div`
  height: 24px;

  svg {
    height: 100%;
    color: #000;
    width: auto;
    display: block;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
`;

const AuthRow = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
`;

const AuthItem = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  font-size: inherit;
  color: #222;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MenuItem = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  text-align: left;
  cursor: pointer;
  color: #000;
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 24px 0 28px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #000;
`;

const CustomerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
`;

const CustomerItem = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  color: #000;
  font-weight: 400;
  line-height: 1.5rem;
`;
