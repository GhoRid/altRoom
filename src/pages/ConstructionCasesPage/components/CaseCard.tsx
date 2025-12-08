import styled from "styled-components";

type CaseCardProps = {
  item: {
    title: string;
    size_label: string;
    duration_label: string;
    tags: string[];
  };
};

const CaseCard = ({ item }: CaseCardProps) => (
  <CaseCardBox>
    <CaseImage />
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

export default CaseCard;

const CaseCardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CaseImage = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #ddd;
  border-radius: 12px;
`;

const CaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CaseName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 24px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 13px;
  color: #777;
`;

const InfoValue = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 14px;
  font-size: 12px;
`;
