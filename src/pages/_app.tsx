import { ChemicalElementProvider } from "@/context/ChemicalElementProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={roboto.className}>
			<ChemicalElementProvider>
				<Component {...pageProps} />
				<ToastContainer />
			</ChemicalElementProvider>

			<Analytics />
		</main>
	);
}
