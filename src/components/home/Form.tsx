import { getElement } from "@/api/getElement";
import { useState } from "react";
import Select, { GroupBase, StylesConfig } from "react-select";
import { toast } from "react-toastify";

import Image from "next/image";
import { useChemicalElement } from "@/context/ChemicalElementProvider";
import { getSublevelDistribution } from "@/api/getSublevelDistribution";
import { getLayerDistribution } from "@/api/getLayerDistribution";

const options = [
	{ value: -2, label: "-2" },
	{ value: -1, label: "-1" },
	{ value: 0, label: "0" },
	{ value: 1, label: "+1" },
	{ value: 2, label: "+2" },
];

export const stylesDefault = {
	indicatorSeparator: (base) => ({
		...base,
		display: "none",
	}),
	dropdownIndicator: (base) => ({
		...base,
		color: "rgb(59 130 246)",
		":hover": {
			color: "rgb(59 130 246)",
		},
	}),
	control: (base) => ({
		...base,
		height: "44px",
		cursor: "pointer",
		border: "2px solid rgb(59 130 246)",
		":hover": {
			borderColor: "rgb(59 130 246)",
		},
	}),
	container: (base) => ({
		...base,
	}),
} as StylesConfig<unknown, boolean, GroupBase<unknown>>;

export function Form() {
	const [selectedOption, setSelectedOption] = useState(options[2]);
	const [elementInput, setElementInput] = useState("");

	const { setElement, setSublevelDistribution, setLayerDistribution } = useChemicalElement();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const returnedElement = getElement(elementInput);

		if (!returnedElement || returnedElement.massa === 0) {
			toast.error("Elemento não encontrado");
			return;
		}

		const sublevelDistribuition = getSublevelDistribution(
			returnedElement,
			Number(selectedOption.value)
		);

		const layerDistribution = getLayerDistribution(sublevelDistribuition);

		setElement(returnedElement);
		setSublevelDistribution(sublevelDistribuition);
		setLayerDistribution(layerDistribution);
	}

	return (
		<form
			className="m-auto mt-8 flex w-72 max-w-[1100px] flex-col items-center justify-between gap-6 rounded-lg"
			onSubmit={handleSubmit}
		>
			<div className="flex w-full items-center justify-between">
				<div className="flex flex-col items-start justify-start gap-2">
					<label className="text-lg font-medium">Elemento Químico</label>
					<div className="relative flex items-center">
						<Image
							className="absolute left-[-36px]"
							src="/images/atomo.png"
							alt="Periodic Table"
							width={28}
							height={28}
						/>

						<input
							className="box-shadow-[1px 2px 5px] h-11 flex-1 rounded border-2 border-blue-500 p-2 shadow-lg outline-blue-400 "
							placeholder="Ex: Na"
							type="text"
							value={elementInput}
							onChange={(e) => setElementInput(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex flex-col items-start justify-start gap-2">
					<label className="text-lg font-medium">Carga</label>

					<Select
						options={options}
						placeholder="0"
						styles={stylesDefault}
						onChange={(option) => setSelectedOption(option as { value: number; label: string })}
						defaultValue={0}
					/>
				</div>
			</div>

			<button
				className="rounded border-[1px] bg-blue-500 p-2 px-4 text-white shadow-md transition hover:bg-blue-400"
				type="submit"
			>
				Calcular
			</button>
		</form>
	);
}
