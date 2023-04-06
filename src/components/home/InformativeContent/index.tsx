import Image from "next/image";

export function InformativeContent() {
	return (
		<div className="mt-36 flex flex-col gap-6">
			<div>
				<h3 className="text-xl font-medium">O que é a distribuição eletrônica?</h3>

				<p>
					A distribuição eletrônica representa a forma como os elétrons se organizam na eletrosfera
					do elemento químico.
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
						<strong className="text-green-600">prótons</strong> (carga <span>positiva</span>) e os{" "}
						<strong className="text-gray-400">nêutrons</strong> (carga <span>neutra</span>). Os
						nêutrons são essenciais no núcleo do átomo para separar os prótons, pois elementos com
						cargas iguais se repelem, então jamais conseguiriam permanecer juntos no núcleo atômico.
						O núcleo também é responsável por aproximadamente toda massa do átomo (em vista de que a
						massa da eletrosfera é insignificante.)
					</p>

					<p>
						A <strong>eletrosfera</strong> consiste em um espaço majoritariamente vazio (este que é
						aproximadamente 100.000 vezes o tamanho do núcleo) que comporta os elétrons do átomo,
						que possuem cargas <span>negativas.</span> Os elétrons nessa eletrosfera são divididos
						em camadas, como podemos ver na imagem abaixo:
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
						Anteriormente a Pauling, sabia-se que os elétrons eram distribuídos em camadas, porém
						não havia conhecimento de como eles se organizavam dentro dessas camadas. Pauling
						conseguiu com seus estudos, descobrir que a forma com que os elétrons se organizavam
						eram em subníveis, e daí se criou o famoso Diagrama de Linus Pauling.
					</p>
					<p>
						Ao usar o Diagrama de Pauling, um dos erros mais cometidos é de seguir horizontalmente a
						ordem, sendo que a forma correta seria de acordo com a imagem abaixo:
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
	);
}
