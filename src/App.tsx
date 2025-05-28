import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import "./App.css";
import { arrowDown, banner, logo } from "./core/constants/assets";
import { MotionBox, MotionText } from "./core/utils/motion-components";

function App() {
  return (
    <Box>
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
        <HStack
          position="absolute"
          top={0}
          left={0}
          width="100%"
          p={4}
          zIndex={10}
          justifyContent="space-between"
          background="transparent"
        >
          <Box></Box>
          <Image src={logo} height="60px" />
          <Box></Box>
          <HStack gap={6} color="white">
            <Text cursor="pointer">Home</Text>
            <Text cursor="pointer">The Origin</Text>
            <Text cursor="pointer">Book a magician</Text>
            <Text cursor="pointer">Our Pillars</Text>
          </HStack>
          <Box width={"25vw"} />
        </HStack>
        <Image
          src={banner}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex={0}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          background={"black"}
          opacity={0.85}
        />
        <Box
          position={"relative"}
          top={"38%"}
          flexDir={"column"}
          textAlign={"center"}
          width={"full"}
        >
          <MotionText
            fontWeight="700"
            fontSize="3.4rem"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0 }}
          >
            Where transformation moves
          </MotionText>

          <MotionText
            fontWeight="700"
            fontSize="3.4rem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }} // Starts after first one ends
          >
            quietly beneath the surface
          </MotionText>

          <MotionText
            fontWeight="700"
            fontSize="1.5rem"
            mt="2rem"
            background="linear-gradient(90deg, #FFF 0%, #999 100%)"
            backgroundClip="text"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6, delay: 5 }} // Starts after second one ends
          >
            What happens here doesn’t vanish — it remains
          </MotionText>

          <Center>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 8 }}
            >
              <Image pt={"3rem"} src={arrowDown} />
            </MotionBox>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
