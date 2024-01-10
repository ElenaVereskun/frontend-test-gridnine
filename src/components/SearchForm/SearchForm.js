import { React } from 'react';
import SearchMinPrice from '../SearchMinPrice/SearchMinPrice';

function SearchForm({
    checkedPriceUp,
    checkedPriceDown,
    checkedFilterByDuration,
    checkByMinPrice,
    checkByAnotherAirlines,
    checkedByTransfer,
    checkedNoTransfer,
    searchMinPrice,
    handleMinPrice,
    searchMaxPrice,
    handleMaxPrice,
    onSearchFlights
}) {

    return (
        <section>
            <form className='search-form'>
                <div className='search-form__sort'>
                    <h2 className='search-form__sort-title'>Сортировать</h2>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onClick={checkedPriceUp}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по возрастанию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onClick={checkedPriceDown}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по убыванию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onClick={checkedFilterByDuration}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по времени в пути</label>
                    </div>
                </div>
                <div className='search-form__filter'>
                    <h2 className='search-form__filter-title'>Фильтровать</h2>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox'
                            onClick={checkedByTransfer}
                            type="checkbox" />
                        <label className='search-form__filter-text'> - 1 пересадка</label>
                    </div>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox'
                            onClick={checkedNoTransfer}
                            type="checkbox" />
                        <label className='search-form__filter-text'> - без пересадок</label>
                    </div>
                </div>
                <div className='search-form__prise'>
                    <h2 className='search-form__prise-title'>Цена</h2>
                    <div className='search-form__prise-container'>
                        <div className='search-form__prise-item'>
                            <p>От </p>
                            <input className='search-form__prise-min'
                                value={searchMinPrice}
                                onChange={handleMinPrice}
                                onClick={onSearchFlights}
                                type='number'
                                placeholder="0" />
                        </div>
                        <div className='search-form__prise-item'>
                            <p>До</p>
                            <input className='search-form__prise-max'
                                value={searchMaxPrice}
                                onChange={handleMaxPrice}
                                onClick={onSearchFlights}
                                type='number'
                                placeholder="1000000" />
                        </div>
                    </div>
                </div>
                <SearchMinPrice
                    checkByMinPrice={checkByMinPrice}
                    checkByAnotherAirlines={checkByAnotherAirlines} />
            </form>
        </section>
    )
}
export default SearchForm;
