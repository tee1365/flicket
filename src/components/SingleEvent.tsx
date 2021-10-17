/* eslint-disable react/jsx-no-undef */
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { FlexProps, Heading } from '@chakra-ui/layout';
import { Flex, Button, Text, IconButton, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slices/cartSlice';
import { AddedEvent, Event } from '../types';
import { GrMapLocation, GrCalendar } from 'react-icons/gr';
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
    <Flex
      boxShadow="md"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      padding={4}
      flexDir="column"
      {...props}
    >
      <Flex flexDir="row" justifyContent="space-between" my={4}>
        <Flex flexDir="column">
          <Heading size="lg">{item.event_name}</Heading>
          <Text mt="4">{item.publisher}</Text>
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Icon as={GrCalendar} mr="6" />
        <Flex flexDir="column">
          <Text fontWeight="bold">{item.event_date}</Text>
          <Text>{item.event_time}</Text>
        </Flex>
      </Flex>

      <Flex flexDir="row" justifyContent="space-between" mt={6}>
        <Flex alignItems="center">
          <Icon as={GrMapLocation} mr="6"></Icon>
          <Flex flexDir="column">
            <Text fontWeight="bold">{item.venue}</Text>
            <Text>{item.city}</Text>
          </Flex>
        </Flex>
        <Heading color="red.500" fontSize="3xl">
          {'$' + item.price * quantity}
        </Heading>
      </Flex>

      <Flex
        flexDir="row-reverse"
        justifyContent="space-between"
        mt={6}
        alignItems="center"
      >
        <Flex>
          <Flex flexDir="row" alignItems="center">
            <IconButton
              aria-label="decrease"
              onClick={() => {
                setQuantity(quantity - 1);
              }}
              disabled={quantity <= 1}
              icon={<MinusIcon />}
            ></IconButton>
            <Text mx={4}>{quantity}</Text>
            <IconButton
              aria-label="increase"
              onClick={() => {
                if (!(quantity >= item.tickets_available)) {
                  setQuantity(quantity + 1);
                }
              }}
              icon={<AddIcon />}
              disabled={quantity >= item.tickets_available}
            ></IconButton>
          </Flex>
          <Button
            ml={8}
            colorScheme="teal"
            onClick={() => {
              const addedItems: AddedEvent = { quantity: quantity, ...item };
              dispatch(addToCart(addedItems));
              setQuantity(1);
            }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleEvent;
