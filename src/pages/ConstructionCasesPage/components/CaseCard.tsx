import styled from "styled-components";

type CaseCardProps = {
  item: {
    title: string;
    size_label: string;
    duration_label: string;
    tags: string[];
    thumbnail: string;
  };
};

const CaseCard = ({ item }: CaseCardProps) => {
  const imageSrc = require(`../../../assets/images/constructionCases/${item.thumbnail}`);

  return (
    <CaseCardBox>
      <ImageBox>
        <img src={imageSrc} alt="건축 사례 이미지" />
      </ImageBox>
      <CaseInfo>
        <CaseName>{item.title}</CaseName>
        <InfoRow>
          <InfoItem>
            <InfoLabel>평수</InfoLabel>
            <InfoValue>{item.size_label}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>시공기간</InfoLabel>
            <InfoValue>{item.duration_label}</InfoValue>
          </InfoItem>
        </InfoRow>
        <TagRow>
          {item.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>
      </CaseInfo>
    </CaseCardBox>
  );
};

export default CaseCard;

const CaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  gap: 16px;
`;

const CaseName = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 50%;
  aspect-ratio: 4 / 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }
`;

const CaseCardBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
  transition: box-shadow 0.25s ease, transform 0.25s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }

  &:hover ${ImageBox} img {
    transform: scale(1.03);
  }
`;

const InfoRow = styled.div`
  display: flex;
  gap: 16px;
`;

const InfoItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #777;
`;

const InfoValue = styled.span`
  font-size: 14px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 8px;
`;

const Tag = styled.div`
  padding: 4px 10px;
  background: #f9fafb;
  border-radius: 999px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
`;
