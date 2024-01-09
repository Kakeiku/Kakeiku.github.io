import styled from "styled-components";
import AnimatedText from "./AnimatedText";
import { FontSizes } from "../Common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`;

const Header = (props) => {
  return (
    <Container>
      <AnimatedText
        content={"KEVIN HUANG"}
        size={FontSizes.large}
        isBold={true}
        setLoaded={props.setLoaded}
      />
    </Container>
  );
};

export default Header;
