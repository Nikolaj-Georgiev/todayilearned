import { CATEGORIES } from '../data/config';
import { Button } from './Button';
import { ListItem } from './ListItem';

export function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <ListItem className='category'>
          <Button
            className='btn btn-all-categories'
            onClick={() => setCurrentCategory('all')}
          >
            All
          </Button>
        </ListItem>
        {CATEGORIES.map((cat) => (
          <ListItem
            key={cat.name}
            className='category'
          >
            <Button
              className='btn btn-category'
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </Button>
          </ListItem>
        ))}
      </ul>
    </aside>
  );
}
