import { Inter, Playfair_Display_SC, Roboto } from "next/font/google";
export const inter = Inter({ subsets: ["latin"],  display: 'swap', });

export const playfair = Playfair_Display_SC({ subsets: ["latin"], weight: ['900', '700', '400',] });
export const roboto = Roboto({ subsets: ["latin"], weight: ['100', "300", "400", "500"] })