import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
