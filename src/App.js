import { useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { FontSizes } from "./Common";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.loaded ? "1" : "0")};
  transition: opacity 2s;
  font-size: ${FontSizes.medium};
`;

const App = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Header setLoaded={setLoaded} />
      <ContentContainer loaded={loaded}>Under Construction.</ContentContainer>
    </>
  );
};

export default App;
