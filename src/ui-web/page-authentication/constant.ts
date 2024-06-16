export const SCREENS_QUERY_PARAMS_AUTHEN = {
  SCREENS: "screen",
} as const;

export const SCREENS_NAME_AUTHEN = {
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
} as const;

export const COOKIE_OPTIONS = {
  expires: 7,
  secure: true,
  sameSite: "Strict",
} as const;
