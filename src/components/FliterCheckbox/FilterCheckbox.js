import './FilterCheckbox.css';

function FilterCheckbox({ onFilter, filterChecked}) {
  return (
    <div className='filter'>
      <label className='filter__switch' htmlFor='movie-filter'>
        <input className='filter__hidden-checkbox' type='checkbox' id='movie-filter' onChange={onFilter} checked={filterChecked} />
        <span className='filter__thumbler'></span>
      </label>
      <p className='filter__title'>
        Короткометражки
      </p>
    </div>
  );
};

export default FilterCheckbox;
