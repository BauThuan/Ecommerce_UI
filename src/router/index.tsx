/* eslint-disable prettier/prettier */

import React from "react";
// import { appRouteConstants } from "./appRouteConstants";

// import RouterGuard from "../util/RouterGuard";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

export const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* public route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* <Route path="login" element={<PageLogin />} /> */}

        {/* protected route */}
        {/* <Route element={<RouterGuard />}>
          <Route
            path={appRouteConstants.BOOKING.BOOKING_DETAIL}
            element={
              <Shell>
                <PageListingsSearch />
              </Shell>
            }
          />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
