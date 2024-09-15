import cx from "clsx";
import { useState } from "react";
import {
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  // Tabs,
  rem,
  useMantineTheme,
} from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "../styles/HeaderMegaMenu.module.css";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useNavigate } from "react-router-dom";
import { appRouteConstants } from "../../../router/appRouteConstants";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

// const tabs = [
//   "Home",
//   "Orders",
//   "Education",
//   "Community",
//   "Forums",
//   "Support",
//   "Account",
//   "Helpdesk",
// ];
export const MenuAvatar = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const inforUser = JSON.parse(localStorage.getItem("user") ?? "null");
  // const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { formatMessage } = useTranslationMessage();

  // const items = tabs.map((tab) => (
  //   <Tabs.Tab value={tab} key={tab}>
  //     {tab}
  //   </Tabs.Tab>
  // ));
  const handleLogOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate(appRouteConstants.AUTHENTICATION.INDEX);
  };
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group gap={7}>
            <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {inforUser?.name}
            </Text>
            <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown sx={{ zIndex: "1500 !important" }}>
        <Menu.Item
          leftSection={
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
              stroke={1.5}
            />
          }
        >
          {formatMessage("Liked posts")}
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconStar
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[6]}
              stroke={1.5}
            />
          }
        >
          {formatMessage("Saved posts")}
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessage
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
              stroke={1.5}
            />
          }
        >
          {formatMessage("Your comments")}
        </Menu.Item>

        <Menu.Label>{formatMessage("Settings")}</Menu.Label>
        <Menu.Item
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          {formatMessage("Account settings")}
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          }
        >
          {formatMessage("Change account")}
        </Menu.Item>
        <Menu.Item
          onClick={() => handleLogOut()}
          leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          {formatMessage("Logout")}
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{formatMessage("Danger zone")}</Menu.Label>
        <Menu.Item
          leftSection={<IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          {formatMessage("Pause subscription")}
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          {formatMessage("Delete account")}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
