export const SCREENS_QUERY_PARAMS = {
  SCREEN: "screen",
} as const;
export const VALIDATE_FORM_MESSAGE = {
  EMAIL: "Invalid email",
  PASSWORD: "Passwords did not match",
  NAME: "Name must have at least 2 letters",
  ADDRESS: "Address is required",
  PHONE_NUMBER: "Invalid phone number",
  QUANTITY: "Quantity must be greater than 0",
  PRICE: "Price must be greater than 0",
} as const;

export const PATH_LOCATION_AUTHEN = {
  LOCATION_AUTHEN: "/authentication",
} as const;

export const STATUS_THEME_APP = {
  LIGHT: "light",
  DARK: "dark",
} as const;
