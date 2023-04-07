import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Badge,
  Center,
  Square,
  Img,
  HStack,
  Divider,
} from "@chakra-ui/react";

const gamingGrowth = "/images/image-gaming-growth.jpg";
const imagedesktop = "/images/image-web-3-desktop.jpg";
const imagelaptops = "/images/image-top-laptops.jpg";
const imageretro = "/images/image-retro-pcs.jpg";

export default function CallToActionWithVideo() {
  return (
    <Container maxW={"7xl"}>
      <HStack color="white" spacing={8} minH="600px" m={10}>
        <Box flex="3">
          <Image alt={""} objectFit={"cover"} src={imagedesktop} />
          <Stack spacing={6} direction="row">
            <Box flex="3" mt={"5"}>
              <Heading as="h1" size="3xl" color="black" fontWeight={700}>
                The Bright
              </Heading>
              <Heading
                as="h1"
                size="3xl"
                noOfLines={3}
                color="black"
                fontWeight={800}
              >
                Future of
              </Heading>
              <Heading
                as="h1"
                size="3xl"
                noOfLines={3}
                color="black"
                fontWeight={800}
              >
                Web 3.0?
              </Heading>
            </Box>
            <Box
              flex="3"
              flexDirection={"column"}
              fontWeight={"800"}
              maxW={400}
            >
              <Heading
                as="h2"
                size="xs"
                noOfLines={4}
                fontWeight={400}
                color="hsl(236, 13%, 42%)"
                pt={"5"}
                mt={5}
              >
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </Heading>

              <Button
                backgroundColor={"#F15E50"}
                size="lg"
                borderRadius={3}
                mt={12}
              >
                Read more
              </Button>
            </Box>
          </Stack>
        </Box>
        <Stack flex="1" bg="black" h="555">
          <Stack align="flex-start">
            <Heading as={"h3"} color="hsl(35, 77%, 62%)" m={5}>
              New
            </Heading>
            <Heading as={"h6"} size="sm" pl={5}>
              Hydrogen VS Electric Cars
            </Heading>
            <Text
              color="hsl(233, 8%, 79%)"
              size="sm"
              pl={5}
              pr={5}
              fontWeight={400}
            >
              Will hydrogen-fueled cars ever catch up to EVs?
            </Text>
          </Stack>
          <Stack direction="row" h="10px" p={4}>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack align="flex-start">
            <Heading as={"h6"} size="sm" pl={5}>
              The Downsides of AI Artistry
            </Heading>
            <Text
              color="hsl(233, 8%, 79%)"
              size="sm"
              pl={5}
              pr={5}
              fontWeight={400}
            >
              What are the possible adverse effects of on-demand AI image
              generation?
            </Text>
          </Stack>
          <Stack direction="row" h="10px" p={4}>
            <Divider orientation="horizontal" />
          </Stack>{" "}
          <Stack align="flex-start">
            <Heading as={"h6"} size="sm" pl={5}>
              Is VC Funding Drying Up?{" "}
            </Heading>
            <Text
              color="hsl(233, 8%, 79%)"
              font-size="15px"
              pl={5}
              pr={5}
              fontWeight={400}
            >
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.{" "}
            </Text>
          </Stack>
        </Stack>
      </HStack>

      <Stack spacing={12} direction="row" m={10} maxH={150}>
        <HStack flex="1" align={"flex-start"}>
          <Image alt={""} objectFit={"cover"} src={imageretro} maxH={150} />
          <Stack align="flex-start">
            <Heading as={"h3"} color="hsl(233, 8%, 79%)" font-weight={800}>
              01
            </Heading>
            <Heading as={"h6"} size="sm" font-weight={700}>
              Reviving Retro PCs
            </Heading>
            <Text color="hsl(233, 8%, 79%)" font-weight={400} font-size="15px">
              What happens when old PCs are given modern upgrades?
            </Text>
          </Stack>
        </HStack>
        <HStack flex="1" align={"flex-start"} maxH={150}>
          <Image alt={""} objectFit={"cover"} src={imagelaptops} maxH={150} />
          <Stack align="flex-start">
            <Heading as={"h3"} color="hsl(233, 8%, 79%)" font-weight={800}>
              02
            </Heading>
            <Heading as={"h6"} size="sm" font-weight={700}>
              Top 10 Laptops of 2022
            </Heading>
            <Text color="hsl(233, 8%, 79%)" font-weight={400} font-size="15px">
              Our best picks for various needs and budgets.
            </Text>
          </Stack>
        </HStack>
        <HStack flex="1" align={"flex-start"} maxH={150}>
          <Image alt={""} objectFit={"cover"} src={gamingGrowth} maxH={150} />
          <Stack align="flex-start">
            <Heading as={"h1"} color="hsl(233, 8%, 79%)" font-weight={800}>
              03
            </Heading>
            <Heading as={"h6"} size="sm" font-weight={700}>
              The Growth of Gaming
            </Heading>
            <Text color="hsl(233, 8%, 79%)" font-weight={400} font-size="15px">
              {" "}
              How the pandemic has sparked fresh opportunities.
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Container>
  );
}
