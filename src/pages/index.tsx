import { Footer, Form, FormResult, Header, InformativeContent } from "@/components";
import { useChemicalElement } from "@/context/ChemicalElementProvider";
import Head from "next/head";

export default function Home() {
	const { element } = useChemicalElement();

	return (
		<>
			<Head>
				<title>Distribuição Eletrônica</title>
				<meta
					name="description"
					content="Calculadora de distribuição eletrônica, onde você insere um elemento químico e sua carga e o aplicativo traz todas as informações."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/atom.png" />
			</Head>

			<Header />

			<main className="m-auto w-full max-w-[1100px] bg-white p-4">
				<div className="m-auto">
					<Form />

					{element?.nome && <FormResult />}
				</div>

				<InformativeContent />
			</main>

			<Footer />
		</>
	);
}
