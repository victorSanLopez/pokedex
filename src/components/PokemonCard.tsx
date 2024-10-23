interface pokemon {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ imgSrc, name }: pokemon) {
	return (
		<figure>
			{imgSrc !== undefined ? <img src={imgSrc} alt={name} /> : <p>"???"</p>}
			<figcaption>
				<p>{name}</p>
			</figcaption>
		</figure>
	);
}

export default PokemonCard;
