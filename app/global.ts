'use client';
import { Box, createTheme, styled } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      // デフォで持ってるブレークポイントだから消せない。
      xs: 0,
      sm: 600,
      md: 768, // sp版
      lg: 850, // 折り返さないくらいの画角
      xl: 1432, // figmaサイズに合わせてる
    },
  },
});
// https://mui.com/material-ui/customization/breakpoints/

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export const TestBox = styled(Box)`
  ${({ theme }) => {
    return {
      // デフォルト
      fontSize: '30px',
      color: 'red',
      background: 'green',
      width: '100vw',

      // lg→md間のスタイル
      [theme.breakpoints.down('md')]: {
        color: 'blue',
      },

      // lg→md間のスタイル
      //   [theme.breakpoints.down('lg')]: {
      //     color: 'green',
      //   },
      // lgの画面幅
      [theme.breakpoints.up('lg')]: {
        color: 'orange',
      },
    };
  }};
`;
