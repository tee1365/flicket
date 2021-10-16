import { Flex } from '@chakra-ui/layout';
import Cart from '../components/Cart';
import EventList from '../components/EventList';
import { useAppSelector } from '../redux/hooks';
import { getIsDisplayed } from '../redux/slices/cartSlice';

const App = (): JSX.Element => {
  const isDisplayed = useAppSelector(getIsDisplayed);

  return (
    <Flex flexDir="row" justifyContent="space-around">
      <EventList></EventList>
      {isDisplayed ? <Cart w="300px" h="300px" border="1px"></Cart> : null}
    </Flex>
  );
};

export default App;
