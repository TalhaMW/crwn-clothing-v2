import CategoryItem from '../CategoryContainer';
import './directory.styles.scss';

export default function Directory({ categories }) {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}
