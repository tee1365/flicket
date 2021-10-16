import { Box, BoxProps } from '@chakra-ui/layout';

interface HeaderProps extends BoxProps {}

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <Box {...props}></Box>;
};

export default Header;
