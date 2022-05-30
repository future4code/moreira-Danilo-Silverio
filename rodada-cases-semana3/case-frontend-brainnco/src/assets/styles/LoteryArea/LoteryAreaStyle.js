import styled from "styled-components";

export const LoteryField = styled.div`
    height: 100vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 4vw;
    background-color: ${(props) => {
    switch (props.lotteriesId) {
      case 0:
        return "#6befa3";
      case 1:
        return "#8666ef";
      case 2:
        return "#dd7ac6";
      case 3:
        return "#ffab64";
      case 4:
        return "#5aad7d";
      case 5:
        return "#bfaf83";
      default:
        return;
    }
  }}
`;