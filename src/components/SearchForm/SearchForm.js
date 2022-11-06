import { useState } from 'react';
import FilterCheckbox from '../FliterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [query, setQuery] = useState('');

  function handleQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='search'>
      <form
        className='search__form'
        onSubmit={handleSubmit}
      >
        <input
          className='search__input'
          type='text'
          placeholder='Фильм'
          id='movie'
          name='movie'
          minLength={1}
          value={query}
          onChange={handleQuery}
          required
        />
        <button
          className='search__submit-btn'
          type='submit'
        >
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;
