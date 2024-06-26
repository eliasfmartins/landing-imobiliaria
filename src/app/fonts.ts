import {
	Inter,
	Cormorant_Infant,
	Cormorant_Unicase,
	Roboto,
} from 'next/font/google';
export const inter = Cormorant_Infant({
	subsets: ['latin'],
	weight: '400',
	style: 'normal',
});

export const robotinho = Roboto({ subsets: ['latin'], weight: '400' });
export const playfair = Cormorant_Unicase({
	subsets: ['latin'],
	weight: ['300', '500', '700'],
});
export const roboto = Cormorant_Infant({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});
