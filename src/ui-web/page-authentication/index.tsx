import { useCallback } from "react";
import { useQueryParams } from "../../hooks/use-query-params";
import { SCREENS_NAME_AUTHEN } from "./constant";
import { PageSignIn } from "./screens/page-sign-in";
import { PageSignUp } from "./screens/page-sign-up";
export const PageAuthentication = () => {
  const { getQueryParams } = useQueryParams();

  const renderScreen = useCallback(() => {
    switch (getQueryParams) {
      case SCREENS_NAME_AUTHEN.SIGN_UP:
        return <PageSignUp />;
      default:
        return <PageSignIn />;
    }
  }, [getQueryParams]);

  return <>{renderScreen()}</>;
};
