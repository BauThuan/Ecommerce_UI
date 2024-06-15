/* eslint-disable prettier/prettier */
import { appRouteConstants } from "./appRouteConstants";
import RouterGuard from "../util/RouterGuard";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import { PageAuthentication } from "../ui-web/page-authentication";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Navigate to={appRouteConstants.AUTHENTICATION.INDEX} replace />} />
        <Route path={appRouteConstants.AUTHENTICATION.INDEX} element={<PageAuthentication />} />

        <Route element={<RouterGuard />}>
          {/* <Route
            path={appRouteConstants.BOOKING.BOOKING_DETAIL}
            element={
              <Shell>
                <PageListingsSearch />
              </Shell>
            }
          /> */}
        </Route>
      </Route>
    </Routes>
  );
};