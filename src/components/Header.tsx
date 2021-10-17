import { BoxProps, Button, Flex, Icon, Text } from '@chakra-ui/react';
import ImageBackground from './ImageBackground';
import { BsCartFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAddedItems, setDrawerDisplay } from '../redux/slices/cartSlice';

interface HeaderProps extends BoxProps {}

const Header = ({
  position,
  top,
  height,
  ...props
}: HeaderProps): JSX.Element => {
  const addedItems = useAppSelector(getAddedItems);
  const dispatch = useAppDispatch();

  return (
    <ImageBackground
      display="flex"
      p={4}
      position={position}
      top={top}
      height={height}
      flexDir="column"
      {...props}
    >
      <Flex justifyContent="flex-end" align="center">
        <Button
          colorScheme="blackAlpha"
          disabled={!addedItems.length}
          onClick={() => {
            dispatch(setDrawerDisplay(true));
          }}
        >
          <Icon as={BsCartFill} mr={4}></Icon>
          <Text color="white">{addedItems.length + ' items'}</Text>
        </Button>
      </Flex>
      <Flex justifyContent="center" mt="auto">
        <Text fontSize="6xl" color="white" mb={12}>
          Events
        </Text>
      </Flex>
    </ImageBackground>
  );
};

export default Header;
