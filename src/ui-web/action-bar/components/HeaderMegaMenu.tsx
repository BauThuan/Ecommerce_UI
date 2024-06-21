import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Autocomplete,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconSearch,
} from "@tabler/icons-react";
import { IconCart } from "../assets/IconCart";
import classes from "../styles/HeaderMegaMenu.module.css";
import { MenuAvatar } from "./Avatar";
import { useTranslationMessage } from "../../../hooks/use-translation-message";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { formatMessage } = useTranslationMessage();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const hideButton = false;

  return (
    <Box py={10}>
      <header className={classes.header}>
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
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      {formatMessage("Features")}
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>{formatMessage("Features")}</Text>
                  <Anchor href="#" fz="xs">
                    {formatMessage("View all")}
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        {formatMessage("Get started")}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {formatMessage("Their food sources have decreased, and their numbers")}
                      </Text>
                    </div>
                    <Button variant="default">{formatMessage("Get started")}</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              {formatMessage("Learn")}
            </a>
            <a href="#" className={classes.link}>
              {formatMessage("Academy")}
            </a>
          </Group>
          <Group visibleFrom="sm">
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
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
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                {formatMessage("Features")}
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            {formatMessage("Learn")}
          </a>
          <a href="#" className={classes.link}>
            {formatMessage(" Academy")}
          </a>

          <Divider my="sm" />
          <Group>
            <Group ml={50} gap={5} className={classes.link_href} visibleFrom="sm">
              {links}
            </Group>
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
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
  );
}
