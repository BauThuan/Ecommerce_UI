/* eslint-disable prettier/prettier */
import { Navigate, Outlet } from "react-router-dom";
import { appRouteConstants } from "../router/appRouteConstants";

const RouterGuard = () => {
  const tokenRef = "kskfkskdf";

  return tokenRef ? <Outlet /> : <Navigate to={appRouteConstants.AUTHENTICATION.INDEX} replace />;
};

export default RouterGuard;
