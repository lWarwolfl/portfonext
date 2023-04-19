import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const font = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: font.style.fontFamily,
		h1: {
			fontWeight: 600,
		},
		h2: {
			fontWeight: 500,
		},
		h3: {
			fontWeight: 500,
		},
		h4: {
			fontWeight: 500,
		},
		h6: {
			fontWeight: 500,
		},
	},
});

export default theme;
