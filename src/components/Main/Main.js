import { React, useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';
import FlightsData from '../../utils/flights.json';

function Main() {
    const [isPriceUp, setIsPriceUp] = useState(false);
    const [isPriceDown, setIsPriceDown] = useState(false);
    const [isFilterByDuration, setIsFilterByDuration] = useState(false);
    const [isByTransfer, setIsByTransfer] = useState(false);
    const [isNoTransfer, setIsNoTransfer] = useState(false);

    const [isFilterByMinPrice, setIsFilterByMinPrice] = useState(false);
    const [isFilterByAnotherAirlines, setIsFilterByAnotherAirlines] = useState(false);

    const [searchMinPriceValue, setSearchMinPriceValue] = useState('');
    const [searchMaxPriceValue, setSearchMaxPriceValue] = useState('');
    //исходный массив оъектов
    const flightsData = FlightsData.result.flights;

    const [filterFlights, setFilterFlights] = useState(flightsData);


        useEffect(() => {
            sortFlightsByPrice();
        }, [isPriceUp, isPriceDown]);

    function sortFlightsByPrice() {
        if (isPriceUp && !isPriceDown) {
            const sortPriceUp = flightsData.sort((a, b) => {
                return a.flight.price.total.amount - b.flight.price.total.amount;
            })
            setFilterFlights(sortPriceUp);
        }
        if (!isPriceUp && isPriceDown) {
            const sortPriceDown = flightsData.sort((a, b) => {
                return b.flight.price.total.amount - a.flight.price.total.amount;
            })
            setFilterFlights(sortPriceDown);
        }
        if (!isPriceUp && !isPriceDown) {
            setFilterFlights(filterFlights);
        }
    };

    function sortFlightsByDuration() {
        if (isFilterByDuration) {
            flightsData.sort((a, b) => {
                return a.flight.legs[0].duration - b.flight.legs[0].duration;
            })
        }
        else {
            return filterFlights;
        }
    };

    function filterFlightsByTransfer() {
        if (isByTransfer && !isNoTransfer) {
            const filterByTrasfer = flightsData.filter((item) => {
                return item.flight.legs[0].segments.length - 1 !== 0 ||
                    item.flight.legs[1].segments.length - 1 !== 0;
            })
            setFilterFlights(filterByTrasfer);
        }
        if (!isByTransfer && isNoTransfer) {
            const filterNoTrasfer = flightsData.filter((item) => {
                return item.flight.legs[0].segments.length - 1 === 0 &&
                    item.flight.legs[1].segments.length - 1 === 0;
            })
            setFilterFlights(filterNoTrasfer);
        }
    };

    function searchByPrice() {
        const filterByPrice = flightsData.filter((item) => {
            return ((searchMinPriceValue <= item.flight.price.total.amount) &&
                (item.flight.price.total.amount <= searchMaxPriceValue));
        })
        setFilterFlights(filterByPrice);
    };

    //Определение мин ценой
    const minPrice = JSON.parse(localStorage.getItem('minPrice'));
    console.log(minPrice);
    const anotherMinPrice = JSON.parse(localStorage.getItem('anotherMinPrice'));
    console.log(anotherMinPrice);

    function filterByMinPrice() {
        if (isFilterByMinPrice && !isFilterByAnotherAirlines) {
            console.log('by min price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === minPrice.flight.carrier.caption;
            })
        }
        if (!isFilterByMinPrice && isFilterByAnotherAirlines) {
            console.log('by min other price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === anotherMinPrice.flight.carrier.caption;
            })
        }
        if (isFilterByMinPrice && isFilterByAnotherAirlines) {
            console.log('bouth price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === anotherMinPrice.flight.carrier.caption &&
                    item.flight.carrier.caption === minPrice.flight.carrier.caption;
            })
        }
        else {
            return flightsData;
        }
    };

    const handleChekPriceUp = (e) => {
        setIsPriceUp(e.target.checked);
    };

    /*     const handleChekPriceUp = () => {
            if (isPriceUp) {
                setIsPriceUp(false);
            } else {
                setIsPriceUp(true);
            }
          }; */

    function handleChekPriceDown(e) {
        setIsPriceDown(e.target.checked);
    };

    function checkedFilterByDuration(e) {
        setIsFilterByDuration(e.target.checked);
    };

    function checkedByTransfer(e) {
        setIsByTransfer(e.target.checked);
    };

    function checkedNoTransfer(e) {
        setIsNoTransfer(e.target.checked);
    };

    function handleMaxPrice(e) {
        setSearchMaxPriceValue(e.target.value);
    };

    function handleMinPrice(e) {
        setSearchMinPriceValue(e.target.value);
    };

    function checkedFilterByMinPrice(e) {
        setIsFilterByMinPrice(e.target.checked);
    };

    function checkedFilterByAnotherAirlines(e) {
        setIsFilterByAnotherAirlines(e.target.checked);
    };

    return (
        <main className='main__container'>
            <SearchForm
                flightsData={flightsData}
                isPriceUp={isPriceUp}
                isPriceDown={isPriceDown}
                checkedPriceUp={handleChekPriceUp}
                checkedPriceDown={handleChekPriceDown}
                checkedFilterByDuration={checkedFilterByDuration}

                sortFlightsByPrice={sortFlightsByPrice}
                sortFlightsByDuration={sortFlightsByDuration}
                filterFlightsByTransfer={filterFlightsByTransfer}
                checkedByTransfer={checkedByTransfer}
                checkedNoTransfer={checkedNoTransfer}

                searchMinPrice={searchMinPriceValue}
                handleMinPrice={handleMinPrice}
                searchMaxPrice={searchMaxPriceValue}
                handleMaxPrice={handleMaxPrice}
                onSearchFlights={searchByPrice}

                filterByMinPrice={filterByMinPrice}
                checkedFilterByMinPrice={checkedFilterByMinPrice}
                checkedFilterByAnotherAirlines={checkedFilterByAnotherAirlines}
            />
            <CardList flights={filterFlights} />
        </main>
    )
}
export default Main;
