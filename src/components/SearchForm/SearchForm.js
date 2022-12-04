import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import FilterCheckbox from '../FliterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearch, query, onFilter, filterChecked }) {
  const {
    values,
    isValid,
    setValues,
    handleChange,
  } = useForm();

  function handleSubmit(e) {
    if (!isValid) return;

    e.preventDefault();
    onSearch(values.movie);
  }

  useEffect(() => {
    setValues({ movie: query });
  }, [setValues, query])

  return (
    <section className='search'>
      <form
        className='search__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className='search__input'
          type='text'
          placeholder='Фильм'
          id='movie'
          name='movie'
          value={values.movie || ''}
          onChange={handleChange}
          required
        />
        <button
          className={`search__submit-btn ${!isValid && 'search__submit-btn_disabled'}`}
          type='submit'
          disabled={!isValid}
        >
          Найти
        </button>
      </form>
      <FilterCheckbox
        onFilter={onFilter}
        filterChecked={filterChecked}
      />
    </section>
  );
};

export default SearchForm;
