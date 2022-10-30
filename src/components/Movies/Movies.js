import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import img from '../../images/movie-image.jpg'

const cards = [
{
  id: 1,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 2,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 3,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 4,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 5,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 6,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 7,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 8,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 9,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 10,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 11,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 12,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 13,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 14,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 15,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},
{
  id: 16,
  title: '33 слова о дизайне',
  src: img,
  duration: '1ч 42м',
  isSaved: true
},

]

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList cards={cards} />
    </main>
  );
};

export default Movies;
