import styled from "styled-components";
import { colors } from "../../../styles/color";
import FadeInUpOnView from "../../../components/FadeInUpOnView";

const HistorySection = () => {
  return (
    <Section>
      <FadeInUpOnView threshold={0.1}>
        <Title>기업연혁</Title>

        <Paragraph>
          알트룸은 2015년 공간디자인 사업으로 시작한
          <br />
          비율건축에서 주거인테리어 전문파트로 시작하여
          <br />
          주거공간 건축설계와 시공의 노하우를 쌓고
          <br />
          <br />
          2023년 4월, 독자적인 법인으로 설립된
          <br />
          주거공간 전문 인테리어 기업입니다.
        </Paragraph>
      </FadeInUpOnView>
    </Section>
  );
};

export default HistorySection;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 40px;
  font-weight: 700;

  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${colors.text_gray};
  text-align: center;
  margin-top: 32px;
`;
