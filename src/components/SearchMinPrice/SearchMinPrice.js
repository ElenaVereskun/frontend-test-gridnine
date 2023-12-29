import { React } from 'react';
import FlightsData from '../../utils/flights.json';

function SearchMinPrice({
    checkedFilterByMinPrice,
    filterByMinPrice,
    checkedFilterByAnotherAirlines
}) {

    const flightsData = FlightsData.result.flights;

    const filterByPrice = flightsData.sort((a, b) => {
        return (a.flight.price.total.amount) - (b.flight.price.total.amount);
    });

    const minPrice = filterByPrice.shift();

    const anotherMinPrice = filterByPrice.find((item) => {
        return item.flight.carrier.caption !== minPrice.flight.carrier.caption;
    });

    const airlines = minPrice.flight.carrier.caption;
    localStorage.setItem("airlines", airlines);
    const ahotherAirlines = anotherMinPrice.flight.carrier.caption;
    localStorage.setItem("ahotherAirlines", ahotherAirlines);

    return (
        <div className='search-min-price__airlines'>
            <h2 className='search-min-price__airlines-title'>Авиакомпании</h2>
            <div className='search-min-price__airlines-container'>
                <input className='search-min-price__airlines-checkbox'
                    onChange={checkedFilterByMinPrice}
                    onClick={filterByMinPrice}
                    type="checkbox" />
                <input
                    className='search-min-price__airlines-text'
                    id='airlines'
                    type='text'
                    value={airlines}
                    disabled />
                <label className='search-min-price__min-price'>
                    от {minPrice.flight.price.total.amount} p.</label>
            </div>
            <div className='search-min-price__airlines-container'>
                <input className='search-min-price__airlines-checkbox'
                    onChange={checkedFilterByAnotherAirlines}
                    onClick={filterByMinPrice}
                    type="checkbox" />
                <input
                    className='search-min-price__airlines-text'
                    id='anotherAirlines'
                    type='text'
                    value={ahotherAirlines}
                    disabled />
                <label className='search-min-price__min-price'>от
                    {anotherMinPrice.flight.price.total.amount} p.</label>
            </div>
        </div>
    )
}
export default SearchMinPrice;