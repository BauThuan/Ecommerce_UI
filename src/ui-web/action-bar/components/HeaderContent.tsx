import {
  HoverCard,
  Center,
  Box,
  rem,
  Group,
  Anchor,
  Divider,
  SimpleGrid,
  Button,
  useMantineTheme,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../styles/HeaderMegaMenu.module.css";
import { useTranslationMessage } from "../../../hooks/use-translation-message";

export const HeaderContent = () => {
  const theme = useMantineTheme();
  const { formatMessage } = useTranslationMessage();
  return (
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
          <Text>{formatMessage("Features")}</Text>
          <Anchor href="#" fz="xs">
            {formatMessage("View all")}
          </Anchor>
        </Group>

        <Divider my="sm" />

        <SimpleGrid cols={2} spacing={0}>
          {/* {links} */}
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
  );
};
