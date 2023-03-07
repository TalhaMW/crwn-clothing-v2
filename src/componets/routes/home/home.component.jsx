import Directory from '../../Directory/Directory.Component';
import categories from '../../../data/categories.json';

export default function Home() {
  return <Directory categories={categories} />;
}
