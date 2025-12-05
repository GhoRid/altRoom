import styled from "styled-components";
import company1ImageUrl from "../../../assets/images/company/company1.png";
import company2ImageUrl from "../../../assets/images/company/company2.png";

const CompanyImageSection = () => {
  return (
    <Section>
      <ImageGrid>
        <ImageWrapper>
          <Image src={company1ImageUrl} alt="Company Building" />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={company2ImageUrl} alt="Company Building" />
        </ImageWrapper>
      </ImageGrid>
    </Section>
  );
};

export default CompanyImageSection;

const Section = styled.section`
  margin-top: 64px;
  width: 100%;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
