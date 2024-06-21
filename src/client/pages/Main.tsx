import React, { useEffect } from "react";

const htmlString = `
  <style>
    #test { padding: 8px; border: 1px solid black; }
    .client { background-color: orangered; }
    .server { background-color: lightblue; }
  </style>

  <div id="test" class="server">server</div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const el = document.getElementById("test");
      el.classList.remove("server");
      el.classList.add("client");
      el.textContent = "client";
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
  useEffect(() => console.log("Hello from useEffect"), []);
  return (
    <>
      <h1>Test</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export default Main;
