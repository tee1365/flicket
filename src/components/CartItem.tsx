import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, BoxProps, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { useAppDispatch } from '../redux/hooks';
import { deleteFromCart, setQuantity } from '../redux/slices/cartSlice';
import { AddedEvent } from '../types';

interface CartItemProps extends BoxProps {
  event: AddedEvent;
}

const CartItem = ({ event, ...props }: CartItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Box {...props}>
      <Heading size="md">{event.event_name}</Heading>
      <Flex alignItems="center" mt={4}>
        <Heading fontSize="2xl" color="red" flex={3}>{`$${
          event.price * event.quantity
        }`}</Heading>
        <IconButton
          aria-label="delete-item"
          icon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteFromCart(event.event_id));
          }}
        ></IconButton>
      </Flex>
      <Flex flexDir="row" alignItems="center" mt={4} justifyContent="flex-end">
        {event.quantity > 1 ? (
          <Text
            color="gray"
            flex={1}
          >{`$${event.price}*${event.quantity}`}</Text>
        ) : null}
        <IconButton
          aria-label="decrease"
          onClick={() => {
            dispatch(
              setQuantity({
                event_id: event.event_id,
                quantity: event.quantity - 1,
              })
            );
          }}
          disabled={event.quantity <= 1}
          icon={<MinusIcon />}
        ></IconButton>
        <Text mx={4}>{event.quantity}</Text>
        <IconButton
          aria-label="increase"
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
          icon={<AddIcon />}
          disabled={event.quantity >= event.tickets_available}
        ></IconButton>
      </Flex>
      <Divider my={4} />
    </Box>
  );
};

export default CartItem;
