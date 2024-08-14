import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from './Card';

export const Main = () => {
	const [characters, setCharacters] = useState([]);

	const getCharacters = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		setCharacters(...characters, data.items);
	};

	useEffect(() => {
		getCharacters('https://dragonball-api.com/api/characters');
	}, []);

	return (
		<section className='characters-grid'>
			{characters.map((character) => {
				return (
					<Card
						key={character.id}
						character={character}
					/>
				);
			})}
		</section>
	);
};
