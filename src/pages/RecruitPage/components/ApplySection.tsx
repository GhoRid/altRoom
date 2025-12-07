import styled from "styled-components";
import { colors } from "../../../styles/color";

const ApplySection = () => {
  return (
    <ApplySectionWrapper>
      <ApplyTexts>
        <p>자유양식 이력서</p>
        <p>자유양식 포트폴리오</p>
        <p>상시채용 official@alt-room.com</p>
      </ApplyTexts>

      <ApplyButton>지원하기</ApplyButton>
    </ApplySectionWrapper>
  );
};

export default ApplySection;

const ApplySectionWrapper = styled.section`
  width: 100%;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ApplyTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;

  p {
    margin: 0;
  }
`;

const ApplyButton = styled.button`
  margin-top: 24px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  background: ${colors.app_brown};
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #816c59;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
