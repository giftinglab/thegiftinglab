import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: 40, fontFamily: "Inter" }}>
      <h1>The Gifting Lab</h1>
      <p>Corporate Gifts SG & MY</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
