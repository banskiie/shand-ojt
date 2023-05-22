import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
