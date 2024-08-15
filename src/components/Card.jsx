export const Card = ({ character }) => {
	const { image, name, race, gender, ki, maxKi, affiliation } = character;

	return (
		<article className='card'>
			<div className='card-image-container'>
				<img
					className='card-image'
					src={image}
					alt='character iamge'
				/>
			</div>
			<div className='card-data-container'>
				<p className='name'>{name}</p>
				<p className='race'>
					{race} - {gender}
				</p>
				<p className='base-ki'>
					Base KI: <br />
					<span>{ki} </span>
				</p>
				<p className='total-ki'>
					Total KI: <br />
					<span>{maxKi}</span>
				</p>
				<p className='afilliation'>
					Affiliation: <br />
					<span>{affiliation}</span>
				</p>
			</div>
		</article>
	);
};
