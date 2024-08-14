import DBlogo from '../assets/logo_dragonballapi.webp';

export const Header = () => {
	return (
		<header className='header'>
			<img
				src={DBlogo}
				alt='Dragon ball logo'
			/>
			<h1>The Dragon Ball API</h1>
		</header>
	);
};
