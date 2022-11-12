import {
  Input,
  Stack,
  Image,
  Text,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import CountryModal from "./CountryModal";

function Test() {
  return (
    <>
      <div>
        <div>
          <Stack>
            <HStack gap={5} marginLeft={"80%"}>
              <CountryModal />
              <Button
                colorScheme="teal"
                variant="solid"
                bg={"black"}
                h={"30px"}
                borderRadius="none"
              >
                <Text>
                  {" "}
                  <a href="/login">Sign up or login</a>{" "}
                </Text>
              </Button>
            </HStack>
            <HStack spacing={"35px"}>
              <a href="/">
                <Image
                  boxSize="50%"
                  src="https://i.ibb.co/wgT9wpn/Untitled-design.png"
                  alt="LYST-LOGO"
                />
              </a>{" "}
              <Stack spacing={3}>
                <Text fontSize="18px">WOMEN</Text>
              </Stack>
              <Stack spacing={3}>
                <Text fontSize="18px">MEN</Text>
              </Stack>
              <Input
                placeholder="SEARCH (e.g. Acne jeans)"
                size="md"
                borderRadius={"none"}
                marginLeft={"25%"}
                h="43px"
                focusBorderColor="black"
              />
            </HStack>
          </Stack>
        </div>
      </div>
      <HStack border={"1px"}>
        <Stack textAlign={"left"} ml="80px" >
          <Text fontSize={"2xl"}>BEST OF BOOTS</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png"
          />
        </Stack>
        <Stack textAlign={"left"}>
          <Text fontSize={"2xl"}>BEST OF BOOTS</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png"
          />
        </Stack>
        <Stack textAlign={"left"}>
          <Text fontSize={"2xl"}>BEST OF BOOTS</Text>
          <Image
            w={"80%"}
            src="https://cdna.lystit.com/cms/774684bb_f807_4fa2_b802_507eb6c226a0_92a34933f0.png"
          />
        </Stack>
      </HStack>
      <div>
        <Image src="https://i.ibb.co/B6Sc8ZZ/mainPage.png" />
      </div>
    </>
  );
}

export default Test;
