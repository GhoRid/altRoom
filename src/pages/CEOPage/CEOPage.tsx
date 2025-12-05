import styled from "styled-components";
import IntroSection from "./components/IntroSection";
import ManagementPhilosophySection from "./components/ManagementPhilosophySection";

const CEOPage = () => {
  return (
    <Wrapper>
      <IntroSection />

      <ManagementPhilosophySection />
    </Wrapper>
  );
};

export default CEOPage;

const Wrapper = styled.div`
  max-width: 990px;
  margin: 0 auto 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 72px; */
`;
