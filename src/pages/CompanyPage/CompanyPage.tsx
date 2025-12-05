import styled from "styled-components";
import IntroSection from "./Components/IntroSection";
import StatsSection from "./Components/StatsSection";
import CompanyImageSection from "./Components/CompanyImageSection";

const CompanyPage = () => {
  return (
    <Wrapper>
      <IntroSection />
      <StatsSection />
      <CompanyImageSection />
    </Wrapper>
  );
};

export default CompanyPage;

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 72px; */
`;
