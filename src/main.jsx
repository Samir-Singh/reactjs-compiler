import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import TabComponent from "./components/TabComponent";
// import ReactRouterDom from "./ReactRouterDom.jsx";
// import AllHooks from "./AllHooks.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster />
    {/* <App /> */}
    {/* <ReactRouterDom /> */}
    {/* <AllHooks /> */}
    <TabComponent />
  </>
);
