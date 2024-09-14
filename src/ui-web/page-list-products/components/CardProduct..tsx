import { Card, Image, Text, Badge, Group, Grid, Rating } from "@mantine/core";
import { ProductProps } from "./type";
import { FormatToVND } from "../../../util";
import { PercentDiscount } from "../../../util";

export const CardProduct = (props: ProductProps) => {
  const { listProducts } = props;
  return (
    <Grid>
      {listProducts &&
        listProducts.map((item, index) => {
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
                    {item?.attributes?.name}
                  </Text>
                  <Badge color="pink">
                    {`Sale ${PercentDiscount(item?.attributes?.oldPrice, item?.attributes?.price)}%`}
                  </Badge>
                </Group>
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {item?.attributes?.description}
                </Text>
                <Group justify="space-between" mt="md" mb="xs">
                  <Badge color="pink">{FormatToVND(item.attributes?.price)}</Badge>
                  <Rating defaultValue={4.1} />
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
    </Grid>
  );
};
