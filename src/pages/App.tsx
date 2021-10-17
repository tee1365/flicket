import { Box, Divider, Flex, Heading } from '@chakra-ui/layout';
import Cart from '../components/Cart';
import EventList from '../components/EventList';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  getAddedItems,
  getDrawerDisplay,
  setDrawerDisplay,
} from '../redux/slices/cartSlice';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useMediaQuery,
} from '@chakra-ui/react';

const App = (): JSX.Element => {
  const addedItems = useAppSelector(getAddedItems);
  const drawerDisplay = useAppSelector(getDrawerDisplay);
  const dispatch = useAppDispatch();

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <>
      {isLargerThan800 ? (
        <>
          <Header height="30vh"></Header>
          <Flex flexDir="row" m={16} alignItems="flex-start">
            <EventList w={'65%'} mx={16}></EventList>
            {addedItems.length ? (
              <Cart w={'25%'} position="sticky" top={16}></Cart>
            ) : (
              <Box w={'20%'}></Box>
            )}
          </Flex>
        </>
      ) : (
        <>
          <Header position="sticky" top={0} height="20vh"></Header>
          <EventList w={'85%'} minW="320px" m={16}></EventList>
          <Drawer
            isOpen={drawerDisplay}
            placement="right"
            onClose={() => {
              dispatch(setDrawerDisplay(false));
            }}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Checkout</DrawerHeader>

              <DrawerBody>
                <Cart w={'100%'}></Cart>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </>
  );
};

export default App;
