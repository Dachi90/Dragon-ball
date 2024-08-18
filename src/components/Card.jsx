/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CharacterModal } from './CharacterModal';

export const Card = ({ character }) => {
	const { image, name, race, gender, ki, maxKi, affiliation, id } = character;
	const baseUrl = 'https://dragonball-api.com/api/characters';

	const [characterSelected, setCharacterSelected] = useState();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onClickCharacter = async (id) => {
		const response = await fetch(`${baseUrl}/${id}`);
		const data = await response.json();
		console.log(data);
		setCharacterSelected(data);
		setIsModalOpen(true);
	};

	return (
		<>
			<article
				className='card'
				onClick={() => onClickCharacter(id)}
			>
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
			{isModalOpen && (
				<CharacterModal
					character={characterSelected}
					setIsModalOpen={setIsModalOpen}
				/>
			)}
		</>
	);
};
