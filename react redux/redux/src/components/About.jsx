import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure,Button } from '@chakra-ui/react'
const About = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"15px"}}>
    <p>nhdhwoiqjdow qdw</p>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure non assumenda temporibus magnam maxime dolorem, officia eveniet, aperiam fuga nisi doloremque rerum architecto rem explicabo obcaecati et libero nesciunt? Sed.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              exit
            </Button>
            <Button variant='ghost' onClick={()=>{console.log("clicked")}}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default About