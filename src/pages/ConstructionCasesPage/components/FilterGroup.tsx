import styled from "styled-components";
import { colors } from "../../../styles/color";

type FilterGroupProps = {
  label: string;
  options: string[];
  active: string;
  onChange: (key: string, value: string) => void;
  paramKey: string;
};

const FilterGroup = ({
  label,
  options,
  active,
  onChange,
  paramKey,
}: FilterGroupProps) => (
  <FilterBlock>
    <FilterLabel>{label}</FilterLabel>
    <FilterRow>
      {options.map((item) => (
        <FilterButton
          key={item}
          $active={active === item}
          onClick={() => onChange(paramKey, item)}
        >
          {item}
        </FilterButton>
      ))}
    </FilterRow>
  </FilterBlock>
);

export default FilterGroup;

const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterLabel = styled.div`
  font-size: 16px;
  color: #111827;
  font-weight: 500;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  background: ${({ $active }) => ($active ? colors.app_brown : "#f9fafb")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ $active }) => ($active ? colors.app_brown : "#f9fafb")};
  }
`;
