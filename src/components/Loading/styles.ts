import styled from "styled-components";

export const MainContainer = styled.div<{ inButton: boolean | undefined }>`
  margin: ${({ inButton }) => (inButton ? "0 auto" : "30% auto")};
  width: fit-content;
`;
