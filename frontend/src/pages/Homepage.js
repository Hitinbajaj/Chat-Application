import React from 'react'
import { useEffect } from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import {Container, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels} from "@chakra-ui/react"
const Homepage = () => {
  
  const history= useNavigate();

  useEffect(() =>{
      const user = JSON.parse(localStorage.getItem("userInfo"));
      
      if (user) {
          history("/chats");
      }
  },[history])
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">CHAT-APP</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="4px">
      <Tabs isFitted variant="soft-rounded" >
          <TabList mb="1em">
            <Tab width="50%" >Login</Tab>
            <Tab width= "50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
