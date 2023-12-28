import { React } from 'react';

function SearchForm({
    minPrice,
    anotherMinPrice,
    isPriceUp,
    isPriceDown,
    /* flightsData, */
    checkedPriceUp,
    checkedPriceDown,
    checkedFilterByDuration,
    checkedFilterByMinPrice,
    checkedFilterByAnotherAirlines,
    sortFlightsByPrice,
    sortFlightsByDuration,
    filterFlightsByTransfer,
    checkedByTransfer,
    checkedNoTransfer,
    filterByMinPrice,
    filterByAnotherAirlines,
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
                            checked={isPriceUp}
                            onChange={checkedPriceUp}
                            onClick={sortFlightsByPrice}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по возрастанию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            checked={isPriceDown}
                            onChange={checkedPriceDown}
                            onClick={sortFlightsByPrice}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по убыванию цены</label>
                    </div>
                    <div className='search-form__sort-container'>
                        <input className='search-form__sort-checkbox'
                            onChange={checkedFilterByDuration}
                            onClick={sortFlightsByDuration}
                            type="checkbox" />
                        <label className='search-form__sort-text'> - по времени в пути</label>
                    </div>
                </div>
                <div className='search-form__filter'>
                    <h2 className='search-form__filter-title'>Фильтровать</h2>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox'
                            onChange={checkedByTransfer}
                            onClick={filterFlightsByTransfer}
                            type="checkbox" />
                        <label className='search-form__filter-text'> - 1 пересадка</label>
                    </div>
                    <div className='search-form__filter-container'>
                        <input className='search-form__filter-checkbox'
                            onChange={checkedNoTransfer}
                            onClick={filterFlightsByTransfer}
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
                                onMouseLeave={onSearchFlights}
                                type='number'
                                placeholder="0" />
                        </div>
                        <div className='search-form__prise-item'>
                            <p>До</p>
                            <input className='search-form__prise-max'
                                value={searchMaxPrice}
                                onChange={handleMaxPrice}
                                onMouseLeave={onSearchFlights}
                                type='number'
                                placeholder="1000000" />
                        </div>
                    </div>
                </div>
                {/*   <div className='search-form__airlines'>
                    <h2 className='search-form__airlines-title'>Авиакомпании</h2>
                    <div className='search-form__airlines-container'>
                        <input className='search-form__airlines-checkbox'
                            onChange={checkedFilterByMinPrice}
                             onClick={filterByMinPrice}
                            type="checkbox" />
                        <label className='search-form__airlines-text'> - {minPrice.flight.carrier.caption} от
                            {minPrice.flight.price.total.amount} p.</label>
                    </div>
                    <div className='search-form__airlines-container'>
                        <input className='search-form__airlines-checkbox'
                            onChange={checkedFilterByAnotherAirlines}
                            onClick={filterByAnotherAirlines}
                            type="checkbox" />
                        <label className='search-form__airlines-text'> - {anotherMinPrice.flight.carrier.caption} от
                            {anotherMinPrice.flight.price.total.amount} p.</label>
                    </div>
                </div> */}
            </form>
        </section>
    )
}
export default SearchForm;
