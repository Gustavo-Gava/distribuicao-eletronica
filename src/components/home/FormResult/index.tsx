import { useChemicalElement } from "@/context/ChemicalElementProvider";
import { getSubnivelString } from "@/getSubnivelString";

const element_properties_dictionary = {
	nome: "Nome do elemento",
	abr: "Abreviação",
	massa: "Massa atômica",
	num_atomico: "Número atômico",
	num_protons: "Número de prótons",
	num_neutrons: "Número de nêutrons",
} as Record<string, string>;

const banned_properties = ["familia", "periodo"];

export function FormResult() {
	const { element, layerDistribution, sublevelDistribution } = useChemicalElement();

	const sublevelDistributionFormatted = getSubnivelString(sublevelDistribution) ?? "";

	return (
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
					{Object.entries(element).map(([key, value], index) => {
						if (value === null || value === 0 || banned_properties.includes(key)) return null;

						return (
							<p key={index}>
								{element_properties_dictionary[key]}: {value}
							</p>
						);
					})}
				</div>
			</div>
		</>
	);
}
