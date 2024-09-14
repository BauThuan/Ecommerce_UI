import {
  HoverCard,
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Autocomplete,
  Switch,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import IconCart from "../assets/IconCart.svg?react";
import classes from "../styles/HeaderMegaMenu.module.css";
import { MenuAvatar } from "./Avatar";
import { useTranslationMessage } from "../../../hooks/use-translation-message";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { PATH_LOCATION_AUTHEN, STATUS_THEME_APP } from "../../../constant";
import { useChangeColorSchemeStore } from "../../../store/use-change-color-scheme";

export function HeaderMegaMenu() {
  const theme = useMantineTheme();
  const { formatMessage } = useTranslationMessage();
  const location = useLocation();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const hideButton = false;
  const colorScheme = useChangeColorSchemeStore((state) => state.colorScheme);

  const showStatusValueTheme = useMemo(() => {
    return colorScheme === STATUS_THEME_APP.LIGHT;
  }, [colorScheme]);

  const isHidenMenuScreenAuthen = useMemo(() => {
    return !(location.pathname === PATH_LOCATION_AUTHEN.LOCATION_AUTHEN);
  }, [location]);
  isHidenMenuScreenAuthen;

  const handleChangeThemeApp = (status: boolean) => {
    if (status) {
      return localStorage.setItem("colorScheme", STATUS_THEME_APP.LIGHT);
    }
    return localStorage.setItem("colorScheme", STATUS_THEME_APP.DARK);
  };

  return (
    <>
      {isHidenMenuScreenAuthen && (
        <Box
          py={10}
          sx={{
            backgroundColor: theme.colors.dark[9],
          }}
        >
          <header
            style={{
              backgroundColor: theme.colors.dark[9],
              padding: 15,
              zIndex: 1000,
            }}
            className={classes.header}
          >
            <Group justify="space-between" h="100%">
              <Box display="flex">
                <IconCart />
                <Text
                  ml={8}
                  sx={{
                    fontWeight: 700,
                    fontSize: 22,
                    color: theme.colors.dark[0],
                  }}
                >
                  {formatMessage("grocerymart")}
                </Text>
              </Box>
              <Group h="100%" gap={0} visibleFrom="sm">
                <a href="#" className={classes.link}>
                  {formatMessage(" Home")}
                </a>
                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                ></HoverCard>
                <a href="#" className={classes.link}>
                  {formatMessage("Learn")}
                </a>
                <a href="#" className={classes.link}>
                  {formatMessage("Academy")}
                </a>
              </Group>
              <Group visibleFrom="sm">
                <Switch
                  defaultChecked={showStatusValueTheme}
                  onChange={(event) => {
                    handleChangeThemeApp(event.currentTarget.checked);
                  }}
                  label={colorScheme ? "Light" : "Dark"}
                />
                <Autocomplete
                  className={classes.search}
                  placeholder="Search"
                  leftSection={
                    <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  }
                  data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]}
                  visibleFrom="xs"
                />

                {hideButton ? (
                  <>
                    <Button variant="default">{formatMessage("Log in")}</Button>
                    <Button>{formatMessage("Sign up")}</Button>
                  </>
                ) : (
                  <MenuAvatar />
                )}
              </Group>

              <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            </Group>
          </header>
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
              <Divider my="sm" />

              <a href="#" className={classes.link}>
                {formatMessage("Home")}
              </a>
              <a href="#" className={classes.link}>
                {formatMessage("Learn")}
              </a>
              <a href="#" className={classes.link}>
                {formatMessage(" Academy")}
              </a>
              <Divider my="sm" />
              <Group mb={15}>
                <Autocomplete
                  ml={15}
                  className={classes.search}
                  placeholder="Search"
                  leftSection={
                    <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  }
                  data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]}
                  visibleFrom="xs"
                />
              </Group>
              <Group justify="center" grow pb="xl" px="md">
                <Button variant="default">{formatMessage("Log in")}</Button>
                <Button>{formatMessage("Sign up")}</Button>
              </Group>
            </ScrollArea>
          </Drawer>
        </Box>
      )}
    </>
  );
}
