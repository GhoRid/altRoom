import styled from "styled-components";
import HistorySection from "./components/HistorySection";
import HistoryTimelineSection from "./components/HistoryTimelineSection";

const HistoryPage = () => {
  return (
    <PageWrapper>
      <HistorySection />
      <HistoryTimelineSection />
    </PageWrapper>
  );
};

export default HistoryPage;

const PageWrapper = styled.div`
  width: 100%;
  margin: 60px 0;
  background-color: #ffffff;
`;
