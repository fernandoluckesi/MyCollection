import { useState } from "react";

import { MainContainer } from "./style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
