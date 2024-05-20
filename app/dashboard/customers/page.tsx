'use client';

import { TestBox } from '@/app/global';
import { Box, useMediaQuery } from '@mui/material';

export default function Page() {
  const isSmallDevice = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {/* useMediaQueryでコンポーネントの出しわけ */}
      {/* {isSmallDevice ? (
        <Box sx={{ backgroundColor: 'red', color: 'white' }} width={'500px'}>
          header
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: 'red',
            color: 'white',
            writingMode: 'vertical-rl',
          }}
          height={'500px'}
        >
          header
        </Box>
      )} */}
      {/* MUIのthemeを使って切り替え */}
      {/* デフォのthemeが生きる */}
      {/* <Box
        sx={{
          backgroundColor: { sm: 'blue', lg: 'yellow', xl: 'green' },
          color: { sm: 'white', lg: 'black', xl: 'white' },
        }}
        width={'100vw'}
      >
        a
      </Box> */}
      {/* style.tsに逃す */}
      <TestBox>a</TestBox>
    </>
  );
}

/*
useMediaQuery：コンポーネントの出しわけで使う

*/
