import { Header } from "@/components/header";
import { Form } from "@/components/home/Form";
import { useChemicalElement } from "@/context/ChemicalElementProvider";
import { getSubnivelString } from "@/getSubnivelString";
import Head from "next/head";
import Image from "next/image";

const element_properties_dictionary = {
	nome: "Nome do elemento: ",
	abr: "Abreviação: ",
	massa: "Massa atômica: ",
	num_atomico: "Número atômico: ",
	num_protons: "Número de prótons: ",
	num_neutrons: "Número de nêutrons: ",
} as Record<string, string>;

export default function Home() {
	const { element, layerDistribution, sublevelDistribution } = useChemicalElement();

	const sublevelDistributionFormatted = getSubnivelString(sublevelDistribution) ?? "";

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

			<main className="m-auto min-h-screen w-full bg-white">
				<Header />

				<div className="m-auto max-w-[1100px]">
					<Form />

					{element?.nome && (
						<div className="p-4">
							<div className="my-6 h-[1px] w-full bg-gray-200 shadow-md" />

							<div className="flex flex-col justify-between gap-8 md:flex-row">
								<div className="flex w-full flex-col gap-2 rounded-lg bg-blue-400 bg-opacity-50 p-4 shadow-lg">
									<h3 className="text-xl font-medium">Classificação por camadas</h3>

									<div>
										{Object.entries(layerDistribution).map(([key, value]) => {
											if (value === 0) return null;

											return (
												<p key={key}>
													{key.toUpperCase()}: {value}
												</p>
											);
										})}
									</div>
								</div>

								<div className="flex w-full flex-col gap-2 rounded-lg bg-blue-400 bg-opacity-50 p-4 shadow-lg">
									<h3 className="text-xl font-medium">Classificação por subníveis</h3>

									<div
										className="flex gap-2"
										dangerouslySetInnerHTML={{ __html: sublevelDistributionFormatted }}
									/>
								</div>
							</div>

							<div className="mt-6 flex w-full flex-col gap-2 rounded-lg bg-blue-400 bg-opacity-50 p-4 shadow-lg">
								<h3 className="text-xl font-medium">Propriedades do Elemento</h3>

								<div>
									{Object.entries(element).map(([key, value]) => {
										if (value === null || value === 0) return null;

										return (
											<p key={value}>
												{element_properties_dictionary[key]} {value}
											</p>
										);
									})}
								</div>
							</div>
						</div>
					)}
				</div>

				<footer className="fixed bottom-0 flex w-full items-center justify-center bg-blue-500 p-4 text-white">
					<p>Copyright © Gustavo Gava 2021</p>
				</footer>
			</main>
		</>
	);
}
