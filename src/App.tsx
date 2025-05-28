import { Box, Center, HStack, Image, Text } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./App.css";
import {
  arrowDown,
  banner,
  blackAnimation,
  logo,
} from "./core/constants/assets";
import { MotionBox, MotionText } from "./core/utils/motion-components";

function App() {
  const controls = useAnimation();
  useEffect(() => {
    async function sequence() {
      await controls.start({
        opacity: 1,
        transition: { duration: 3, ease: "easeOut" },
      });

      await controls.start({
        y: 0,
        x: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
      await controls.start({
        x: [-20, -18, -16, -14, 0],
        textShadow: [
          `
    1px 1px 0 #ccc,
    2px 2px 0 #bbb,
    3px 3px 0 #aaa,
    4px 4px 0 #999,
    5px 5px 0 #888
  `,
          `0`,
        ],
        // skew: [0, 12, 10, 6, 0],
        opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        transition: {
          duration: 1,
          ease: "circIn",
          times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
        },
      });

      await controls.start({
        x: 0,
        skewX: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }

    sequence();
  }, [controls]);
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

      <Box
        height={"100vh"}
        width={"100%"}
        background={`url("${blackAnimation}")`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
        textAlign={"center"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <MotionText
          initial={{ y: 75, x: 0, opacity: 0 }}
          animate={controls}
          style={{
            fontSize: "3.7rem",
            fontWeight: "700",
            willChange: "transform, opacity",
          }}
        >
          Morphios is a living practice.
        </MotionText>
        <MotionText
          fontSize={"2rem"}
          fontWeight={"400"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          A whisper in performance
        </MotionText>
        <MotionText
          fontSize={"2rem"}
          fontWeight={"400"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
        >
          A mirror in film
        </MotionText>
      </Box>
    </Box>
  );
}

export default App;
