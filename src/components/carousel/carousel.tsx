import { useRef } from "react";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { listImagesUrl } from "../constants";
import { CarouselProps } from "../type";

export const CarouselCustom = (props: CarouselProps) => {
  // You can customize the carousel yourself

  const {
    withIndicators = true,
    height = 200,
    slidesToScroll = 1,
    withControls = true,
    slideGap = "md",
    slideSize = "100%",
    radiusImage = "md",
    bdRadiusCr = "10px",
    controlSize = 27,
    timeDelay = 2000,
    listImages,
  } = props;

  const images = listImages ? listImages : listImagesUrl;

  const autoplay = useRef(Autoplay({ delay: timeDelay }));

  return (
    <Carousel
      withControls={withControls}
      withIndicators={withIndicators}
      height={height}
      slideGap={slideGap}
      slideSize={slideSize}
      slidesToScroll={slidesToScroll}
      controlSize={controlSize}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      sx={() => ({
        "& .mantine-Carousel-viewport": {
          borderRadius: `${bdRadiusCr} !important`,
        },
      })}
    >
      {images.map((url) => (
        <Carousel.Slide key={url}>
          <Image src={url} radius={radiusImage} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
