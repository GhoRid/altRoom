import { useLocation, NavLink } from "react-router";
import styled from "styled-components";
import { colors } from "../styles/color";

const companyTabs = [
  { label: "기업소개", to: "/company" },
  { label: "CEO인사", to: "/company/ceo" },
  { label: "기업비전", to: "/company/vision" },
  { label: "기업연혁", to: "/company/history" },
  { label: "파트너스", to: "/company/partners" },
  { label: "채용안내", to: "/company/recruit" },
];

const CompanyHeader = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <TabList>
        {companyTabs.map((tab) => (
          <TabItem key={tab.to}>
            <TabLink to={tab.to} $active={location.pathname === tab.to} end>
              {tab.label}
            </TabLink>
          </TabItem>
        ))}
      </TabList>
    </Wrapper>
  );
};

export default CompanyHeader;

const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: 32px;
  padding: 24px 0;
`;

const TabList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const TabItem = styled.li``;

const TabLink = styled(NavLink)<{ $active: boolean }>`
  position: relative;
  display: inline-flex;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    sans-serif;

  align-items: center;

  font-size: 16px;
  line-height: 24px;
  padding-bottom: 2px;

  font-weight: ${({ $active }) => ($active ? 700 : "")};
  /* letter-spacing: -0.02em; */

  color: ${({ $active }) => ($active ? "#111827" : "#6b7280")};
  text-decoration: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  border-bottom: ${({ $active }) =>
    $active ? `2px solid ${colors.app_brown}` : "2px solid transparent"};

  &:hover {
    color: #374151;
  }
`;
