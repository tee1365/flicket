import { Box, Flex } from '@chakra-ui/layout';
import Cart from '../components/Cart';
import EventList from '../components/EventList';
import Header from '../components/Header';
import { useAppSelector } from '../redux/hooks';
import { getAddedItems } from '../redux/slices/cartSlice';

const App = (): JSX.Element => {
  const addedItems = useAppSelector(getAddedItems);
  return (
    <>
      <Header></Header>
      <Flex flexDir="row" m={16} alignItems="flex-start">
        <EventList flex={3} mx={16}></EventList>
        {addedItems.length ? <Cart flex={1}></Cart> : <Box flex={1}></Box>}
      </Flex>
    </>
  );
};

export default App;
