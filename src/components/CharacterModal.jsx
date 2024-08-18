/* eslint-disable react/prop-types */
export const CharacterModal = ({ character, setIsModalOpen }) => {
	const { image, name, race, originPlanet, description, transformations } = character;

	console.log(transformations);

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<section className='modal'>
			<article className='modal-article'>
				<div className='character-details-cointainer'>
					<div className='character-modal-img'>
						<img
							src={image}
							alt='Image character'
						/>
					</div>
					<div className='character-modal-details'>
						<p>Nombre:{name}</p>
						<p>Raza:{race}</p>
						<p>Planeta:{originPlanet.name}</p>
						<p>Descripción:{description}</p>
					</div>
					<i
						className='close-modal'
						onClick={closeModal}
					>
						❌
					</i>
				</div>
				<div className='transformations-container'>
					<h2>Transformaciones</h2>
					{/* No me está renderizando este map */}
					{transformations.map((transform) => {
						<div key={transform.id}>
							<img
								src={transform.image}
								alt='transformation image'
							/>
							<div>
								<p>{transform.name}</p>
								<p>{transform.ki}</p>
							</div>
						</div>;
					})}
				</div>
			</article>
		</section>
	);
};
