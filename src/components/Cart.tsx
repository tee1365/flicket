import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearCart, getAddedItems } from '../redux/slices/cartSlice';
import CartItem from './CartItem';

interface CartProps extends BoxProps {}

const Cart = ({ ...props }: CartProps): JSX.Element => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const addedItems = useAppSelector(getAddedItems);

  // get total price
  const total: number = addedItems.length
    ? addedItems
        .map((item) => item.price * item.quantity)
        .reduce((pre, curr) => pre + curr)
    : 0;
  
  return (
    <Box
      {...props}
      boxShadow="md"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
    >
      <Box m={6}>
        {addedItems.map((event) => (
          <CartItem event={event} key={event.event_id}></CartItem>
        ))}
        <Flex my={4} alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">Total:</Text>
          <Heading fontSize="2xl" color="red">
            {'$' + total}
          </Heading>
        </Flex>
        <Flex justifyContent="flex-end">
          <Button
            colorScheme="teal"
            onClick={() => {
              toast({
                title: 'Order Completed.',
                description: 'We will send you a confirmation email soon',
                status: 'success',
                duration: 5000,
                isClosable: true,
              });
              dispatch(clearCart());
            }}
          >
            Complete Order
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cart;
