
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgAcosoInfantil,
	imgAcosoFamiliar,
	imgAcosoEscolar,

] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link AcosoSocial */}
			<CategoryCard
				category={categories.acosoinfantil}
				src={imgAcosoInfantil}
				alt={`Categoría ${categories.AcosoInfantil}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			{/* Category Link AcosoFamiliar */}
			<CategoryCard
				category={categories.acosofamiliar}
				src={imgAcosoFamiliar}
				alt={`Categoría ${categories.AcosoFamiliar}`}
			/>
			{/* Category Link AcosoEscolar */}
			<CategoryCard
				category={categories.acosoescolar}
				src={imgAcosoEscolar}
				alt={`Categoría ${categories.AcosoEscolar}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
			
		</div>
	);
};
