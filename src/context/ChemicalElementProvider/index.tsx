import { ReactNode, createContext, useContext, useState } from "react";

export type Element = {
	massa: number;
	num_atomico: number;
	num_protons: number;
	num_neutrons: number;
	abr: string;
	nome: string;
	familia: string;
	periodo: number;
};

interface ChemicalElementContextData {
	element: Element;
	setElement: (element: Element) => void;
	sublevelDistribution: {
		s: {
			um: number;
			dois: number;
			tres: number;
			quatro: number;
			cinco: number;
			seis: number;
			sete: number;
		};
		p: {
			um: number;
			dois: number;
			tres: number;
			quatro: number;
			cinco: number;
			seis: number;
		};
		d: {
			um: number;
			dois: number;
			tres: number;
			quatro: number;
		};
		f: {
			um: number;
			dois: number;
		};
	};
	setSublevelDistribution: (
		sublevelDistribution: ChemicalElementContextData["sublevelDistribution"]
	) => void;
	layerDistribution: string;
	setLayerDistribution: (
		layerDistribution: ChemicalElementContextData["layerDistribution"]
	) => void;
}

interface ChemicalElementProviderProps {
	children: ReactNode;
}

const ChemicalElementContext = createContext({} as ChemicalElementContextData);

export function ChemicalElementProvider({ children }: ChemicalElementProviderProps) {
	const [element, setElement] = useState<Element>({} as Element);
	const [sublevelDistribution, setSublevelDistribution] = useState(
		{} as ChemicalElementContextData["sublevelDistribution"]
	);
	const [layerDistribution, setLayerDistribution] = useState(
		"" as ChemicalElementContextData["layerDistribution"]
	);

	return (
		<ChemicalElementContext.Provider
			value={{
				element,
				setElement,
				sublevelDistribution,
				setSublevelDistribution,
				layerDistribution,
				setLayerDistribution,
			}}
		>
			{children}
		</ChemicalElementContext.Provider>
	);
}

export const useChemicalElement = () => {
	return useContext(ChemicalElementContext);
};
