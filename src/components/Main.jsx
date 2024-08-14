import { useFetch } from '../hooks/useFetch';
import { Card } from './Card';

export const Main = () => {
	const { data, loading, error } = useFetch('https://dragonball-api.com/api/characters');
	const characters = data.items;

	return (
		<section className='characters-grid'>
			{/* {error && <p>{error}</p>} */}
			{loading && <p>loading...</p>}
			{characters?.map((character) => {
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
