import { useEffect, useRef, useState } from 'react';
import { Card } from './Card';

export const Main = () => {
	const [characters, setCharacters] = useState([]);
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(true);

	const elementRef = useRef(null);

	useEffect(() => {
		fetchData('https://dragonball-api.com/api/characters');
	}, []);

	const onInersecion = (entries) => {
		const firstEntry = entries[0];
		if (firstEntry.isIntersecting && links.next) {
			fetchData(links.next);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onInersecion, {
			root: null,
			rootMargin: '10px',
			threshold: 1.0,
		});
		if (observer && elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, [characters]);

	const fetchData = async (url) => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();

		const newCharacters = [...characters, ...data.items];
		setCharacters(newCharacters);

		const links = data.links;
		setLinks(links);

		setLoading(false);
	};

	return (
		<>
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

			{links.next && (
				<p
					className='more'
					ref={elementRef}
				>
					&#8659;
				</p>
			)}
		</>
	);
};
