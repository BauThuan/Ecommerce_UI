import { Card, Image, Text, Badge, Group, Grid, Rating } from "@mantine/core";

export const CardProduct = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Grid>
      {data.map((index) => {
        return (
          <Grid.Col key={index} span={2.4}>
            <Card shadow="sm" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={2}>
                  Coffee Beans - Espresso Arabica and Robusta Beans
                </Text>
                <Badge color="pink">On Sale</Badge>
              </Group>
              <Text size="sm" c="dimmed" lineClamp={2}>
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
              </Text>
              <Text size="sm" c="dimmed">
                Lavazza
              </Text>
              <Group justify="space-between" mt="md" mb="xs">
                <Badge color="pink">$47.00</Badge>
                <Rating defaultValue={4.1} />
              </Group>
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
