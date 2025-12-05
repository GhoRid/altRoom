import { Outlet } from "react-router";
import CompanyHeader from "../components/CompanyHeader";
import styled from "styled-components";

const CompanyLayout = () => {
  return (
    <OutletContainer>
      <CompanyHeader />
      <Outlet />
    </OutletContainer>
  );
};

export default CompanyLayout;

const OutletContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 108px auto 0;
`;
