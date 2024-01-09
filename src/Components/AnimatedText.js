import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Colors } from "../Common";

const blink = keyframes`
  0% {opacity: 0}
  49% {opacity: 0}
  50% {opacity: 1}
`;

const Text = styled.div`
  font-size: ${(props) => props.size};
  color: ${Colors.text};
  font-weight: ${(props) => (props.isBold ? "700" : "400")};
`;

const TypeWriter = styled(Text)`
  animation: ${blink} 1s infinite linear;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AnimatedText = (props) => {
  const { content, size, isBold, setLoaded } = props;
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 300;

  const handleLoaded = () => {
    if (!setLoaded) return;
    setTimeout(() => {
      setLoaded(true);
    }, speed);
  };

  useEffect(() => {
    setDisplayedContent(displayedContent + content[index]);
    if (index === content.length - 1) {
      handleLoaded();
    } else {
      setTimeout(() => {
        setIndex(index + 1);
      }, speed);
    }
  }, [index]);

  return (
    <TextWrapper>
      <Text size={size} isBold={isBold}>
        {displayedContent}
      </Text>
      <TypeWriter size={size} isBold={isBold}>
        |
      </TypeWriter>
    </TextWrapper>
  );
};

export default AnimatedText;
