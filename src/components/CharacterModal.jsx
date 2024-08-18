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
						<div>
							<p>
								Nombre: <span>{name}</span>
							</p>
							<p>
								Raza: <span>{race}</span>
							</p>
							<p>
								Planeta: <span>{originPlanet.name}</span>
							</p>
						</div>
						<div>
							<p>
								Descripción: <span>{description}</span>
							</p>
						</div>
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
					<div className='transformations-images-container'>
						{transformations.map((transform) => {
							return (
								<div
									key={transform.id}
									className='transformation-image-container'
								>
									<img
										src={transform.image}
										alt='transformation image'
									/>
									<div>
										<p>{transform.name}</p>
										<p>{transform.ki}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</article>
		</section>
	);
};
