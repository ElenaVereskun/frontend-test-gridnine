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
    const flights = FlightsData.result.flights;
    const flightsData = [...flights];
    console.log(flightsData);
    localStorage.setItem("flightsData", JSON.stringify(flightsData));

    const [filterFlights, setFilterFlights] = useState(flightsData);

     useEffect(() => {
        setIsPriceUp();
        setIsPriceDown();
        sortFlightsByPrice();
    }, [isPriceUp, isPriceDown]);

    useEffect(() => {
        setIsFilterByDuration();
        sortFlightsByDuration();
    }, [isFilterByDuration]);

    useEffect(() => {
        setIsByTransfer();
        setIsNoTransfer();
        filterFlightsByTransfer();
    }, [isByTransfer, isNoTransfer]);

    useEffect(() => {
        setIsFilterByMinPrice();
        setIsFilterByAnotherAirlines();
        filterByMinPrice();
    }, [isFilterByMinPrice, isFilterByAnotherAirlines]);

    function sortFlightsByPrice() {
        if (isPriceUp && !isPriceDown) {            
            const filtered =  flightsData.sort((a, b) => {
                return a.flight.price.total.amount - b.flight.price.total.amount;
            })
            setFilterFlights(filtered);
        }
        if (!isPriceUp && isPriceDown) {
            const filtered =  flightsData.sort((a, b) => {
                return b.flight.price.total.amount - a.flight.price.total.amount;
            })
            setFilterFlights(filtered);
        }
        if (!isPriceUp && !isPriceDown) {
            return filterFlights;
        }
    };

    function sortFlightsByDuration() {
        if (isFilterByDuration) {
            const filtered = flightsData.sort((a, b) => {
                return a.flight.legs[0].duration - b.flight.legs[0].duration;
            })
            setFilterFlights(filtered);
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

    //Определение мин цены
    const minPrice = JSON.parse(localStorage.getItem('minPrice'));
    const anotherMinPrice = JSON.parse(localStorage.getItem('anotherMinPrice'));

    function filterByMinPrice() {
        if (isFilterByMinPrice && !isFilterByAnotherAirlines) {
            const filterFlights = flightsData.filter((item) => {
                return item.flight.carrier.caption === minPrice.flight.carrier.caption;
            })
            setFilterFlights(filterFlights);
        }
        if (!isFilterByMinPrice && isFilterByAnotherAirlines) {
            const filterFlights = flightsData.filter((item) => {
                return item.flight.carrier.caption === anotherMinPrice.flight.carrier.caption;
            })
            setFilterFlights(filterFlights);
        }
        if (isFilterByMinPrice && isFilterByAnotherAirlines) {
            const filterFlights = flightsData.filter((item) => {
                return item.flight.carrier.caption === anotherMinPrice.flight.carrier.caption &&
                    item.flight.carrier.caption === minPrice.flight.carrier.caption;
            })
            setFilterFlights(filterFlights);
        }
        else {
            return flightsData;
        }
    };

     const handleChekPriceUp = (e) => {
        setIsPriceUp(e.target.checked);
    };

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

    function checkByMinPrice(e) {
        setIsFilterByMinPrice(e.target.checked);
    };

    function checkByAnotherAirlines(e) {
        setIsFilterByAnotherAirlines(e.target.checked);
    };

    return (
        <main className='main__container'>
            <SearchForm
                isPriceUp={isPriceUp}
                isPriceDown={isPriceDown}
                checkedPriceUp={handleChekPriceUp}
                checkedPriceDown={handleChekPriceDown}
                checkedFilterByDuration={checkedFilterByDuration}

                checkedByTransfer={checkedByTransfer}
                checkedNoTransfer={checkedNoTransfer}

                searchMinPrice={searchMinPriceValue}
                handleMinPrice={handleMinPrice}
                searchMaxPrice={searchMaxPriceValue}
                handleMaxPrice={handleMaxPrice}
                onSearchFlights={searchByPrice}

                checkByMinPrice={checkByMinPrice}
                checkByAnotherAirlines={checkByAnotherAirlines}
            />
            <CardList flights={filterFlights} />
        </main>
    )
}
export default Main;
