import { Box, Flex } from '@chakra-ui/layout';
import Cart from '../components/Cart';
import EventList from '../components/EventList';
import Header from '../components/Header';
import { useAppSelector } from '../redux/hooks';
import { getIsDisplayed } from '../redux/slices/cartSlice';

const App = (): JSX.Element => {
  const isDisplayed = useAppSelector(getIsDisplayed);

  return (
    <>
      <Header></Header>
      <Flex flexDir="row" justifyContent="space-around" m={16}>
        <EventList flex={3} mx={16}></EventList>
        {isDisplayed ? (
          <Cart flex={1} border="1px"></Cart>
        ) : (
          <Box flex={1}></Box>
        )}
      </Flex>
    </>
  );
};

export default App;
