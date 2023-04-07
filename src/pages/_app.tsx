import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import { AppProps } from "next/app";
import theme from "@/theme";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

export default MyApp;
