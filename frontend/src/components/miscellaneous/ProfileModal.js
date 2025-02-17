import { useDisclosure } from '@chakra-ui/hooks';
import { ViewIcon } from '@chakra-ui/icons';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: 'flex' }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h='410px'>
          <ModalHeader
            fontSize='40px'
            fontFamily='Work sans'
            maxWidth={'fit-content'}
            marginLeft={'auto'}
            marginRight={'auto'}
            d='flex'
            justifyContent='center'
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='space-between'
          >
            <VStack justifyContent={'space-between'} alignItems={'center'}>
              <Image
                borderRadius='full'
                boxSize='50px'
                src={user.pic}
                alt={user.name}
              />
              <Text
                fontSize={{ base: '28px', md: '30px' }}
                fontFamily='Work sans'
              >
                Email: {user.email}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
