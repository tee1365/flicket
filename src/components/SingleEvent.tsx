import { FlexProps } from '@chakra-ui/layout';
import { Flex, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addToCart, setDisplay } from '../redux/slices/cartSlice';
import { AddedEvent, Event } from '../types';

interface SingleEventProps extends FlexProps {
  event: Event;
}

const SingleEvent = ({
  event: item,
  ...props
}: SingleEventProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <Flex flexDir="row" justifyContent="space-between" {...props}>
      {item.event_name}
      <Flex flexDir="row" alignItems="center">
        <Button
          onClick={() => {
            setQuantity(quantity - 1);
          }}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <Text mx={4}>{quantity}</Text>
        <Button
          onClick={() => {
            if (!(quantity >= item.tickets_available)) {
              setQuantity(quantity + 1);
            }
          }}
          disabled={quantity >= item.tickets_available}
        >
          +
        </Button>
        <Button
          onClick={() => {
            const addedItems: AddedEvent = { quantity: quantity, ...item };
            dispatch(addToCart(addedItems));
            dispatch(setDisplay(true));
          }}
        >
          Confirm
        </Button>
      </Flex>
    </Flex>
  );
};

export default SingleEvent;
