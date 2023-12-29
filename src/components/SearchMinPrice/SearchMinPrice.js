import { React } from 'react';

function SearchMinPrice({
    flightsData,
    checkedFilterByMinPrice,
    filterByMinPrice,
    checkedFilterByAnotherAirlines
}) {

    const filterByPrice = flightsData.sort((a, b) => {
        return (a.flight.price.total.amount) - (b.flight.price.total.amount);
    });

    const minPrice = filterByPrice[0];

    const anotherMinPrice = filterByPrice.find((item) => {
        return item.flight.carrier.caption !== minPrice.flight.carrier.caption;
    });

    console.log(minPrice);
    console.log(anotherMinPrice);

    localStorage.setItem("minPrice",JSON.stringify(minPrice));
    localStorage.setItem("anotherMinPrice",JSON.stringify(anotherMinPrice));
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
                    value={minPrice.flight.carrier.caption}
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
                    value={anotherMinPrice.flight.carrier.caption}
                    disabled />
                <label className='search-min-price__min-price'>от
                    {anotherMinPrice.flight.price.total.amount} p.</label>
            </div>
        </div>
    )
}
export default SearchMinPrice;