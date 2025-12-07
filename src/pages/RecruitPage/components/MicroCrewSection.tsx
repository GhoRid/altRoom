import styled from "styled-components";
import { colors } from "../../../styles/color";

const MicroCrewSection = () => {
  return (
    <MicroCrewWrapper>
      <MicroCrewInner>
        <MicroCrewTextGroup>
          <MicroCrewTitle>트렌디한 시공집단 “마이크루”</MicroCrewTitle>
          <MicroCrewBody>
            <p>
              알트룸은 열정있는 현장소장님들과 품질높은 시공을 전국적으로
              제공하기 위해
              <br />
              “마이크루”라는 프로세스를 만들었습니다.
              <br />
              솔루션을 통해{" "}
              <strong>최고의 시공전문가가 되어 연봉 1억과 </strong>
              <br />
              무료 지사창업의 사장님이 되어보세요.
            </p>
          </MicroCrewBody>
        </MicroCrewTextGroup>

        <MicroCrewCards>
          <MicroCrewCard>
            <MicroCrewBadge>주 5일제 근무</MicroCrewBadge>
            <MicroCrewQuote>
              “더 이상 작업에 주말근무를 없애 주세요”
            </MicroCrewQuote>
          </MicroCrewCard>

          <MicroCrewCard>
            <MicroCrewBadge>간편한 시공 매뉴얼 제공</MicroCrewBadge>
            <MicroCrewQuote>“현장내용이 매일 바뀌어서 힘들어요”</MicroCrewQuote>
          </MicroCrewCard>

          <MicroCrewCard>
            <MicroCrewBadge>평균 인센티브 600만원</MicroCrewBadge>
            <MicroCrewQuote>“우리도 연봉 1억 받고 싶어요”</MicroCrewQuote>
          </MicroCrewCard>

          <MicroCrewCard>
            <MicroCrewBadge>무료 지사창업 지원</MicroCrewBadge>
            <MicroCrewQuote>“저도 이제 사장이 되고싶어요”</MicroCrewQuote>
          </MicroCrewCard>
        </MicroCrewCards>
      </MicroCrewInner>
    </MicroCrewWrapper>
  );
};

export default MicroCrewSection;

const MicroCrewWrapper = styled.section`
  width: 100%;
  margin-top: 80px;
`;

const MicroCrewInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const MicroCrewTextGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const MicroCrewTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;

  text-align: center;
`;

const MicroCrewBody = styled.div`
  margin: 0 96px;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.text_gray};

  p {
    margin: 0;
  }

  strong {
    font-weight: 700;
    color: #111827;
  }
`;

const MicroCrewCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
`;

const MicroCrewCard = styled.div`
  background: #f9fafb;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const MicroCrewBadge = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  background: #ffd94a;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
`;

const MicroCrewQuote = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${colors.text_gray};
`;
