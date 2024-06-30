import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Chatbox from '../components/ChatBox';
import MyChats from '../components/MyChats';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { ChatState } from '../context/chatProvider';

const ChatPage = () => {
  // const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box d='flex' justifyContent='space-between' w='100%' h='91.5vh' p='10px'>
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default ChatPage;
