import Home from "./pages/Home";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./theme-context";

const ToggleTheme = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default ToggleTheme;
