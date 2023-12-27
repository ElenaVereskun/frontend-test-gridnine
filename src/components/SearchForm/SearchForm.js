import { React } from 'react';

function SearchForm({ minPrice,
    airlines,
    anotherMinPrice,
    anotherAirlines,
    checkedPriceUp,
    checkedPriceDown,
    checkedFilterByDuration,
    checkedFilterByMinPrice,
    checkedFilterByAnotherAirlines,
    filterFlightsByPrice,
    filterFlightsByDuration,
    filterByMinPrice,
    filterByAnotherAirlines
}) {


    function handleSubmit(e) {
        e.preventDefault();
        filterFlightsByPrice();
    };
    return (
        <section>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='search-form__sort'>
                    <h2 className='search-form__sort-title'>Сортировать</h2>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onChange={checkedPriceUp}
                            onClick={filterFlightsByPrice}
                            /* checked={checkedPriceUp} */
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по возрастанию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onChange={checkedPriceDown}
                            onClick={filterFlightsByPrice}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по убыванию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onChange={checkedFilterByDuration}
                            onClick={filterFlightsByDuration}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по времени в пути</label>
                    </div>
                </div>
                <div className='search-form__filter'>
                    <h2 className='search-form__filter-title'>Фильтровать</h2>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox' type="checkbox" />
                        <label className='search-form__filter-text'> - 1 пересадка</label>
                    </div>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox' type="checkbox" />
                        <label className='search-form__filter-text'> - без пересадок</label>
                    </div>
                </div>
                <div className='search-form__prise'>
                    <h2 className='search-form__prise-title'>Цена</h2>
                    <div className='search-form__prise-container'>
                        <div className='search-form__prise-item'>
                            <p>От </p>
                            <input className='search-form__prise-min' type='number' placeholder="0" />
                        </div>
                        <div className='search-form__prise-item'>
                            <p>До</p>
                            <input className='search-form__prise-max' type='number' placeholder="1000000" />
                        </div>
                    </div>
                </div>
                <div className='search-form__airlines'>
                    <h2 className='search-form__airlines-title'>Авиакомпании</h2>
                    <div className='search-form__airlines-container'>
                        <input className='search-form__airlines-checkbox'
                            onChange={checkedFilterByMinPrice}
                            onClick={filterByMinPrice}
                            type="checkbox" />
                        <label className='search-form__airlines-text'> - {airlines} от {minPrice} p.</label>
                    </div>
                    <div className='search-form__airlines-container'>
                        <input className='search-form__airlines-checkbox'
                            onChange={checkedFilterByAnotherAirlines}
                            onClick={filterByAnotherAirlines}
                            type="checkbox" />
                        <label className='search-form__airlines-text'> - {anotherAirlines} от {anotherMinPrice} p.</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default SearchForm;

{/* <section>
<form className='search-form' onSubmit={handleSubmit}>
    <div className='search-form__quest'>
        <input className='search-form__input'
            value={searchValue}
            name="search"
            onChange={handleChangeSearch}
            placeholder="Фильм" />
        <span ></span>
        <button className='search-form__button'>Поиск</button>
    </div>
    <div className='search-form__short'>
        <FilterCheckbox
            onClickCheckbox={onClickCheckbox}
            isShort={isShort}
            handleChek={handleChek} />
        <p className='search-form__short-text'>Короткометражки</p>
    </div>
</form>
</section> */}