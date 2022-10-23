//External Lib Import
import { useSelector } from "react-redux";

//Internal Lib Import
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { AccessToken } = useSelector((state) => state.Auth);

  return AccessToken ? <RouteComponent /> : <Navigate to="/account/login" />;
};

export default PrivateRoute;
