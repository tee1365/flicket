import { Box, BoxProps } from '@chakra-ui/react';

interface CartProps extends BoxProps {}

const Cart = ({ ...props }: CartProps): JSX.Element => {
  return <Box {...props}></Box>;
};

export default Cart;
