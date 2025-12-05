import { Link } from "react-router";
import styled from "styled-components";
import { colors } from "../../../styles/color";

const AltroomButton = () => {
  return (
    <StyledLink to="/estimate">
      <p>start ALT ROOM</p>
    </StyledLink>
  );
};

export default AltroomButton;

const StyledLink = styled(Link)`
  padding: 16px 32px;
  border-radius: 8px;
  background-color: ${colors.app_brown};

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    color: #ffffff;
  }
`;
