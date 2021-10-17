import { Box, BoxProps, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { useAppDispatch } from '../redux/hooks';
import { setQuantity } from '../redux/slices/cartSlice';
import { AddedEvent } from '../types';

interface CartItemProps extends BoxProps {
  event: AddedEvent;
}

const CartItem = ({ event, ...props }: CartItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Box {...props}>
      <Text>{event.event_name}</Text>
      <Text>{event.price}</Text>
      <Flex flexDir="row">
        <Button
          onClick={() => {
            dispatch(
              setQuantity({
                event_id: event.event_id,
                quantity: event.quantity - 1,
              })
            );
          }}
          disabled={event.quantity <= 1}
        >
          -
        </Button>
        <Text mx={4}>{event.quantity}</Text>
        <Button
          onClick={() => {
            if (!(event.quantity >= event.tickets_available)) {
              dispatch(
                setQuantity({
                  event_id: event.event_id,
                  quantity: event.quantity + 1,
                })
              );
            }
          }}
          disabled={event.quantity >= event.tickets_available}
        >
          +
        </Button>
      </Flex>
    </Box>
  );
};

export default CartItem;
