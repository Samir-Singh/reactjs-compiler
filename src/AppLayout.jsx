import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Loading */}
      {isLoading && <p>Loading...</p>}
      {/* Body */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
