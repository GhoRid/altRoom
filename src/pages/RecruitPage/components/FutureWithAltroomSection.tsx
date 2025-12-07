import styled from "styled-components";

const FutureWithAltroomSection = () => {
  const tags = [
    "#경력2년 이상",
    "#CAD 중급이상",
    "#스케치업 중급이상",
    "#렌더링 가능",
    "#워드,엑셀,PPT",
    "#감리경험",
    "#꼼꼼한 성격",
    "#디자이너",
    "#기획,브랜딩",
    "#마케팅",
  ];

  return (
    <FutureWrapper>
      <FutureInner>
        <FutureTitle>알트룸과 함께하는 미래</FutureTitle>

        <FutureBody>
          <p>
            알트룸은 소비자의 알권리와 시장의 투명성을 통해
            <br />
            인테리어 시장의 부정적인 이미지를 변화시키고자 노력합니다.
            <br />
            <br />
            단순, 시장의 신뢰도를 넘어서
            <strong>
              높은 품질의 디자인과 마감을
              <br /> 대중적인 비용으로 제공
            </strong>
            할 수 있도록 끊임 없이 고민하며 <br />
            다양한 프로젝트들을 완수해 나가고 있습니다.
          </p>
        </FutureBody>

        <FutureTags>
          {tags.map((tag) => (
            <FutureTag key={tag}>{tag}</FutureTag>
          ))}
        </FutureTags>

        <FutureFooterText>
          체계적인 프로젝트 관리 시스템을 통해 효율성 있는 업무를 지향합니다.
        </FutureFooterText>
      </FutureInner>
    </FutureWrapper>
  );
};

export default FutureWithAltroomSection;

const FutureWrapper = styled.section`
  width: 100%;
  margin-top: 90px;
  display: flex;
  justify-content: center;
`;

const FutureInner = styled.div`
  width: 100%;
  max-width: 1040px;
  text-align: center;
`;

const FutureTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const FutureBody = styled.div`
  margin: 0 96px;
  font-size: 16px;
  line-height: 1.8;
  color: #4b5563;

  strong {
    font-weight: 700;
    color: #111827;
  }
`;

const FutureTags = styled.div`
  margin-top: 88px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const FutureTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: #ffd94a;
  font-size: 14px;
  line-height: 20px;
  color: #111827;
`;

const FutureFooterText = styled.p`
  margin-top: 40px;
  font-size: 16px;
  line-height: 1.7;
  color: #6b7280;
`;
