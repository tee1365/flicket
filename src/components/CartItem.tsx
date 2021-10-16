import { Box, BoxProps } from '@chakra-ui/layout';

interface CartItemProps extends BoxProps {}

const CartItem = ({ ...props }: CartItemProps): JSX.Element => {
  return <Box {...props}></Box>;
};

export default CartItem;
