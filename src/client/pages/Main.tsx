import React, { useEffect, useState } from "react";

const htmlString = `
  <style>
    #server-test { padding: 8px; border: 1px solid black; }
  </style>

  <div id="server-test">server</div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const serverTestElement = document.getElementById("server-test");
      serverTestElement.textContent = "client";
      console.log("Hello from DOMContentLoaded");
    });
    console.log("Hello from normal script");
  </script>

  <script type="module">
    (function() {
      console.log("Hello from module script");
    })();
  </script>
`;

const Main = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello from useEffect");
  }, []);
  
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  
  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export default Main;
