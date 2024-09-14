/* eslint-disable prettier/prettier */
import { appRouteConstants } from "./appRouteConstants";
import RouterGuard from "../util/RouterGuard";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { MainLayout } from "../ui-web";
import { PageAuthentication } from "../ui-web/page-authentication";
import { PageDashBoard } from "../ui-web/page-dashboard";
import { PageListProducts } from "../ui-web/page-list-products";



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Navigate to={appRouteConstants.AUTHENTICATION.INDEX} replace />} />
        <Route path={appRouteConstants.AUTHENTICATION.INDEX} element={<PageAuthentication />} />

        <Route element={<MainLayout />}>
        <Route element={<RouterGuard />}>
          <Route
            path={appRouteConstants.WEBSITE_DASHBOARD.INDEX}
            element={<PageDashBoard/>}
          />
          <Route
            path={appRouteConstants.PRODUCTS.INDEX}
            element={<PageListProducts/>}
          />
        </Route>
        </Route>
      </Route>
    </Routes>
  );
};