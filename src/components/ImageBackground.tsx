import { Box, BoxProps } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface ImageBackgroundProps extends BoxProps {
  children: ReactNode;
}

const ImageBackground = ({
  children,
  position,
  top,
  ...boxProps
}: ImageBackgroundProps): JSX.Element => {
  let image =
    'https://images.unsplash.com/photo-1632213702844-1e0615781374?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNjQ4MDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzI2Njg0Mjc&ixlib=rb-1.2.1&q=85';

  return (
    <Box
      width={'100%'}
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      zIndex={1}
      position={position}
      top={top}
    >
      <Box background="rgba(0, 0, 0, 0.4)" {...boxProps}>
        {children}
      </Box>
    </Box>
  );
};

export default ImageBackground;
