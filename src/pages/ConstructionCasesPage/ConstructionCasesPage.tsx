import { useSearchParams } from "react-router";
import styled from "styled-components";
import { useCallback } from "react";
import FilterGroup from "./components/FilterGroup";
import CaseCard from "./components/CaseCard";
import data from "./data.json";
import { colors } from "../../styles/color";

const ConstructionCasesPage = () => {
  // 검색 파라미터 관리
  const [searchParams, setSearchParams] = useSearchParams();

  const propertyType = searchParams.get("property_type") || "전체";
  const budgetType = searchParams.get("budget_type") || "전체";
  const constructionType = searchParams.get("construction_type") || "전체";

  const handleChange = useCallback(
    (key: string, value: string) => {
      // 검색 파라미터를 매핑해주기. 업데이트를 next에 반영
      const next = new URLSearchParams(searchParams);
      if (value === "전체") {
        //선택된 키 제거
        next.delete(key);
      } else {
        // key value형태로 저장
        next.set(key, value);
      }
      setSearchParams(next);
    },
    [searchParams, setSearchParams]
  );

  const filteredData = data.filter((item) => {
    if (budgetType !== "전체" && item.budget_grade !== budgetType) return false;
    if (propertyType !== "전체" && item.property_type !== propertyType)
      return false;
    if (
      constructionType !== "전체" &&
      item.construction_type !== constructionType
    )
      return false;
    return true;
  });

  return (
    <Wrapper>
      <Title>시공 사례</Title>

      <Content>
        <HeaderSection>
          <TitleQ>인테리어 시공 계획이 있나요?</TitleQ>
          <Subtitle>예산과 원하는 컨셉의 다양한 사례를 경험해보세요.</Subtitle>
        </HeaderSection>

        {/* 필터 영역 */}
        <FilterSection>
          <FilterGroup
            label="예산 등급"
            options={["전체", "스탠다드", "프리미엄", "하이엔드"]}
            active={budgetType}
            onChange={handleChange}
            paramKey="budget_type"
          />

          <FilterGroup
            label="건물 유형"
            options={["전체", "아파트", "주택", "오피스텔"]}
            active={propertyType}
            onChange={handleChange}
            paramKey="property_type"
          />

          <FilterGroup
            label="시공 유형"
            options={[
              "전체",
              "신축 전체 리모델링",
              "신축 부분 리모델링",
              "구축 전체 리모델링",
              "구축 부분 리모델링",
            ]}
            active={constructionType}
            onChange={handleChange}
            paramKey="construction_type"
          />
          {(budgetType !== "전체" ||
            propertyType !== "전체" ||
            constructionType !== "전체") && (
            <BottomResetWrapper>
              <BottomResetButton
                type="button"
                onClick={() => setSearchParams(new URLSearchParams())}
              >
                필터 전체 초기화
              </BottomResetButton>
            </BottomResetWrapper>
          )}
        </FilterSection>

        {/* 예시 카드 목록 */}
        <CardList>
          {filteredData.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </CardList>
      </Content>
    </Wrapper>
  );
};

export default ConstructionCasesPage;

/* ---------------- Styled ---------------- */

const Wrapper = styled.div`
  max-width: 992px;
  margin: 104px auto 160px;
`;

const Content = styled.div`
  padding: 48px 16px;
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-auto-rows: auto;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  margin-bottom: 52px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: 1 / -1;
`;

const TitleQ = styled.h2`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${colors.text_gray};
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 960px) {
    order: 2;
  }
`;

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  grid-column: 2 / -1;

  @media (max-width: 960px) {
    grid-column: auto;
  }
`;

const BottomResetWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  border-top: 1px solid #e5e7eb;
`;

const BottomResetButton = styled.button`
  width: 100%;
  max-width: 600px;
  padding: 12px 16px;
  background: #f9fafb;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #4b5563;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ececec;
  }
`;
