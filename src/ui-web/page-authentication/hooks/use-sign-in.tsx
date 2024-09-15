// authHooks.js
import { useMutation } from "@tanstack/react-query";
import { API_CLIENT } from "../../../api";
import { API_PATHS } from "../../../api";
import { useUserStore } from "../../../store";
import { useNavigate } from "react-router-dom";
import { appRouteConstants } from "../../../router/appRouteConstants";
interface IAuthen {
  identifier: string;
  password: string;
}

export const signIn = async (loginCredentials: IAuthen) => {
  try {
    const response = await API_CLIENT.post(API_PATHS.AUTH.LOGIN, loginCredentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useSignIn = () => {
  const { setInforUser } = useUserStore();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (loginCredentials: IAuthen) => {
      return signIn(loginCredentials);
    },
    onSuccess: (data) => {
      setInforUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("refreshToken", data.jwt);
      navigate(appRouteConstants.PRODUCTS.INDEX);
    },
    onError: (error) => {
      console.error("Sign-in failed:", error);
    },
  });
};
//   <TextInput
//     mt="sm"
//     placeholder={formatMessage("Email")}
//     key={form.key("email")}
//     {...form.getInputProps("email")}
//     rightSection={<IconMail size="20px" stroke={1.5} />}
//   />
//   <PasswordInput
//     mt="sm"
//     placeholder={formatMessage("Password")}
//     key={form.key("password")}
//     {...form.getInputProps("password")}
//     visibilityToggleIcon={({ reveal }) =>
//       reveal ? <IconLockOpen size="20px" stroke={1.5} /> : <IconLock size="20px" stroke={1.5} />
//     }
//   />

//   {showInputConfirmPassword && (
//     <PasswordInput
//       mt="sm"
//       placeholder={formatMessage("Confirm Password")}
//       key={form.key("confirmPassword")}
//       {...form.getInputProps("confirmPassword")}
//       visibilityToggleIcon={({ reveal }) =>
//         reveal ? <IconLockOpen size="20px" stroke={1.5} /> : <IconLock size="20px" stroke={1.5} />
//       }
//     />
//   )}
//   <Box
//     mt={10}
//     display="flex"
//     sx={{
//       alignItems: "center",
//       justifyContent: "space-between",
//     }}
//   >
//     <Checkbox
//       size="xs"
//       sx={{
//         fontWeight: 500,
//         color: theme.colors.neutral[1],
//       }}
//       label={formatMessage("Set as default card")}
//       onChange={(event) => {
//         console.log(">>> check kerd", event.currentTarget.checked);
//         // saveLoginInfo();
//       }}
//     />
//     <Anchor
//       href="#"
//       sx={{
//         fontWeight: 500,
//         fontSize: 12,
//         color: theme.colors.scarlet[9],
//       }}
//     >
//       {formatMessage("Recovery Password")}
//     </Anchor>
//   </Box>
//   <Group justify="flex-end" mt="md">
//     <Button
//       onClick={handleSignIn}
//       color={theme.colors.autumn[0]}
//       sx={{
//         color: theme.colors.dark[0],
//         fontWeight: 500,
//       }}
//       fullWidth
//       type="submit"
//     >
//       {formatMessage("Login")}
//     </Button>
//     <Button
//       justify="center"
//       fullWidth
//       leftSection={<IconBrandGoogleFilled />}
//       variant="default"
//       mt="md"
//     >
//       {formatMessage("Sign in with Gmail")}
//     </Button>
//   </Group>
// </form>;
