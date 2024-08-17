import { useEffect, useState } from 'react';
import { Card } from './Card';

export const Main = () => {
	const [characters, setCharacters] = useState([]);
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async (url) => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();

		const newCharacters = data.items;
		setCharacters((prev) => [...prev, ...newCharacters]);
		console.log(characters);

		const links = data.links;
		setLinks(links);
		//console.log(links);

		setLoading(false);
	};

	const handleScroll = async () => {
		const clientHeight = document.documentElement.clientHeight; // Altura de la ventana visible
		const scrollTop = document.documentElement.scrollTop; // Altura de scroll disponible hacia arriba
		const scrollHeight = document.documentElement.scrollHeight; // Altura total de todo el contenido

		const scrollRemaining = Math.abs(clientHeight + scrollTop - scrollHeight);
		//console.log(scrollRemaining);

		if (scrollRemaining < 50) {
			//console.log(links.next);
			fetchData(links.next);
		}
	};

	useEffect(() => {
		fetchData('https://dragonball-api.com/api/characters');
	}, []);

	document.addEventListener('scroll', handleScroll);

	return (
		<section className='characters-grid'>
			{/* {error && <p>{error}</p>} */}
			{loading && <p>loading...</p>}
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
