import { Box, BoxProps, Button } from '@chakra-ui/react';
import { useAppSelector } from '../redux/hooks';
import { getAddedItems } from '../redux/slices/cartSlice';
import CartItem from './CartItem';

interface CartProps extends BoxProps {}

const Cart = ({ ...props }: CartProps): JSX.Element => {
  const addedItems = useAppSelector(getAddedItems);
  return (
    <Box {...props}>
      {addedItems.map((event) => (
        <CartItem event={event}></CartItem>
      ))}
      <Button>Complete Order</Button>
    </Box>
  );
};

export default Cart;
