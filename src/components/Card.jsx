export const Card = ({ character }) => {
	const { image, name, race, gender, ki, maxKi, affilation } = character;

	return (
		<article>
			<img
				src={image}
				alt='character iamge'
			/>
			<div>
				<p>{name}</p>
				<p>
					{race} - {gender}
				</p>
				<p>
					Base KI: <br />
					{ki}
				</p>
				<p>
					Total KI: <br />
					{maxKi}
				</p>
				<p>
					Affiliation: <br />
					{affilation}
				</p>
			</div>
		</article>
	);
};
