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

			<Header />

			<main className="m-auto w-full max-w-[1100px] bg-white p-4">
				<div className="m-auto">
					<Form />

					{element?.nome && (
						<>
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
						</>
					)}
				</div>

				<div className="mt-36 flex flex-col gap-6">
					<div>
						<h3 className="text-xl font-medium">O que é a distribuição eletrônica?</h3>

						<p>
							A distribuição eletrônica representa a forma como os elétrons se organizam na
							eletrosfera do elemento químico.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-medium">Como é a estrutura do átomo?</h3>

						<div>
							<p>
								O <strong>átomo</strong> é dividido basicamente em duas regiões: O{" "}
								<strong>núcleo</strong> e a<strong>eletrosfera.</strong>
							</p>

							<p>
								O <strong>núcleo</strong> é composto pelos{" "}
								<strong className="text-green-600">prótons</strong> (carga <span>positiva</span>) e
								os <strong className="text-gray-400">nêutrons</strong> (carga <span>neutra</span>).
								Os nêutrons são essenciais no núcleo do átomo para separar os prótons, pois
								elementos com cargas iguais se repelem, então jamais conseguiriam permanecer juntos
								no núcleo atômico. O núcleo também é responsável por aproximadamente toda massa do
								átomo (em vista de que a massa da eletrosfera é insignificante.)
							</p>

							<p>
								A <strong>eletrosfera</strong> consiste em um espaço majoritariamente vazio (este
								que é aproximadamente 100.000 vezes o tamanho do núcleo) que comporta os elétrons do
								átomo, que possuem cargas <span>negativas.</span> Os elétrons nessa eletrosfera são
								divididos em camadas, como podemos ver na imagem abaixo:
								<Image
									src="/images/camadas_atomo.webp"
									width={300}
									height={300}
									alt="Camadas do átomo"
								/>
							</p>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-medium">Diagrama de Pauling</h3>

						<div>
							<p>
								Anteriormente a Pauling, sabia-se que os elétrons eram distribuídos em camadas,
								porém não havia conhecimento de como eles se organizavam dentro dessas camadas.
								Pauling conseguiu com seus estudos, descobrir que a forma com que os elétrons se
								organizavam eram em subníveis, e daí se criou o famoso Diagrama de Linus Pauling.
							</p>
							<p>
								Ao usar o Diagrama de Pauling, um dos erros mais cometidos é de seguir
								horizontalmente a ordem, sendo que a forma correta seria de acordo com a imagem
								abaixo:
								<Image
									src="/images/diagrama_linus_pauling.png"
									width={300}
									height={300}
									alt="Diagrama Linus Pauling"
								/>
							</p>
						</div>
					</div>
				</div>
			</main>

			<footer className="bottom-0 flex w-full items-center justify-center bg-blue-500 p-4 text-white">
				<p>Copyright © Gustavo Gava 2021</p>
			</footer>
		</>
	);
}
