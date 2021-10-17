import { Flex, Text } from '@chakra-ui/react';
import ImageBackground from './ImageBackground';

const Header = (): JSX.Element => {
  return (
    <ImageBackground
      display="flex"
      p={4}
      position="sticky"
      top={0}
      zIndex={1}
      height="30vh"
      flexDir="column"
    >
      <Flex justifyContent="center" mt="auto">
        <Text fontSize="6xl" color="white" mb={12}>
          Events
        </Text>
      </Flex>
    </ImageBackground>
  );
};

export default Header;
