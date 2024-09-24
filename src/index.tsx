import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <StyledDiv>module</StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  color: red;
`;

export default App;
