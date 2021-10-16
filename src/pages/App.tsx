import { Box, Flex } from '@chakra-ui/layout';
import Cart from '../components/Cart';
import EventList from '../components/EventList';
import { useAppSelector } from '../redux/hooks';
import { getIsDisplayed } from '../redux/slices/cartSlice';

const App = (): JSX.Element => {
  const isDisplayed = useAppSelector(getIsDisplayed);

  return (
    <Flex flexDir="row" justifyContent="space-around" mt={16}>
      <EventList maxW="50%"></EventList>
      {isDisplayed ? (
        <Cart w="20%" h="300px" border="1px"></Cart>
      ) : (
        <Box w="20%"></Box>
      )}
    </Flex>
  );
};

export default App;
