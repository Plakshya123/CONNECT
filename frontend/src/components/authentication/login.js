import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setloading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => {
    setshow(!show);
  };

  const submitHandler = async () => {
    setloading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setloading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Log in - Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      setloading(false);

      history.push("/chats");
      history.go(0);
    } catch (error) {
      toast({
        title: "Error occured!",
        description: error.response,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log(error);
      setloading(false);
    }
  };

  return (
    <VStack spacing={"5px"} color={"black"}>
      <FormControl mb={"1em"} id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl mb={"0.4em"} id="password" isRequired>
        <FormLabel>Choose your Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your password"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h="1.75rem" size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Log in
      </Button>

      <Button
        variant={"solid"}
        colorScheme="red"
        width={"100%"}
        color={"white"}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Anonymous ( Guest Login )
      </Button>
    </VStack>
  );
};

export default Login;
