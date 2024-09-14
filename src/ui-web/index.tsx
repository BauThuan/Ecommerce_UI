import { Outlet } from "react-router-dom";
import { ActionBar } from "./action-bar";
export const MainLayout = () => {
  return (
    <>
      <ActionBar />
      <Outlet />
    </>
  );
};
