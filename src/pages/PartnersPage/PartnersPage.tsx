import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";

const PartnersPage = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <PartnersSection />
    </PageWrapper>
  );
};

export default PartnersPage;

const PageWrapper = styled.div`
  width: 100%;
  max-width: 990px;
  padding: 0 15px;
  margin: 60px auto;
  background-color: #ffffff;
`;
