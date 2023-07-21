import { Bebas_Neue, Montserrat } from "next/font/google";

export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-bebas',
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-mont'
});
