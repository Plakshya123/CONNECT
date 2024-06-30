import {
  Box,
  Container,
  Text,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../components/authentication/login";
import SignUp from "../components/authentication/signup";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Center
        d="flex"
        justifyContent="center"
        p={1}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="Work Sans" color={"Black"}>
          Connect
        </Text>
      </Center>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Log in</Tab>
            <Tab width={"50%"}>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <SignUp></SignUp>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
