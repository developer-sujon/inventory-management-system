//Internal lib imports
import FullScreenLoader from "./components/Common/FullScreenLoader";
import AppRoutes from "./components/Routes/Routes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <FullScreenLoader />
    </>
  );
};

export default App;
