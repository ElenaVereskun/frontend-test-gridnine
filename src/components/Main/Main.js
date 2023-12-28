import { React, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';
import FlightsData from '../../utils/flights.json';

function Main() {
    const [isPriceUp, setIsPriceUp] = useState(false);
    const [isPriceDown, setIsPriceDown] = useState(false);
    const [isFilterByDuration, setIsFilterByDuration] = useState(false);
    const [isFilterByMinPrice, setIsFilterByMinPrice] = useState(false);
    const [isFilterByAnotherAirlines, setIsFilterByAnotherAirlines] = useState(false);
    const [searchMinPriceValue, setSearchMinPriceValue] = useState('');
    const [searchMaxPriceValue, setSearchMaxPriceValue] = useState('');
    //исходный массив оьектов
    const flightsData = FlightsData.result.flights;

    const [filterFlights, setFilterFlights] = useState(flightsData);

    function sortFlightsByPrice() {
        if (isPriceUp && !isPriceDown) {
            console.log("по возрастанию");
            flightsData.sort((a, b) => {
                return a.flight.price.total.amount - b.flight.price.total.amount;
            })
        }
        if (isPriceUp === false && isPriceDown === true) {
            console.log("по уьыванию");
            flightsData.sort((a, b) => {
                return b.flight.price.total.amount - a.flight.price.total.amount;
            })
        }
        if (isPriceUp === false && isPriceDown === false) {
            return filterFlights;
        }
    };

    function sortFlightsByDuration() {
        if (isFilterByDuration === true) {
            flightsData.sort((a, b) => {
                console.log("времени в пути");
                return a.flight.legs[0].duration - b.flight.legs[0].duration;
            })
        }
        else {
            return filterFlights;
        }
    };

    function filterFlightsByTransfer() {
        if (isFilterByDuration === true) {
            flightsData.sort((a, b) => {
                console.log("времени в пути");
                return a.flight.legs[0].duration - b.flight.legs[0].duration;
            })
        }
        else {
            return filterFlights;
        }
    };



    console.log(searchMinPriceValue);
    console.log(searchMaxPriceValue);

    function searchByPrice() {
        flightsData.filter((item) => {
            return setFilterFlights(searchMinPriceValue < item.flight.price.total.amount > searchMaxPriceValue);
        })
    };

    //поиск минимальной цены
    function filterByMinPrice() {
        const flightsData = FlightsData.result.flights;
        if (isFilterByMinPrice === true) {
            flightsData.sort((a, b) => {
                return setFilterFlights((a.flight.price.total.amount) - (b.flight.price.total.amount));
            });
        } else {
            return setFilterFlights(flightsData);
        }


    };

    //поиск минимальной цены у другой авиакомпании
    function filterByAnotherAirlines() {
        const filterByPrice = flightsData.sort((a, b) => {
            return (a.flight.price.total.amount) - (b.flight.price.total.amount);
        });
        const minPrice = filterByPrice.shift();
        filterByPrice.find((item) => {
            return item.flight.carrier.caption !== minPrice.flight.carrier.caption;
        });
    };

    function handleChekPriceUp() {
        if (isPriceUp) {
            setIsPriceUp(false);
        } else {
            setIsPriceUp(true);
        }
    };

    function handleChekPriceDown(e) {
        setIsPriceDown(e.target.checked);
    };

    function checkedFilterByDuration(e) {
        setIsFilterByDuration(e.target.checked);
    };

    function checkedFilterByMinPrice(e) {
        setIsFilterByMinPrice(e.target.checked);
    };

    function checkedFilterByAnotherAirlines(e) {
        setIsFilterByAnotherAirlines(e.target.checked);;
    };

    function handleMaxPrice(e) {
        setSearchMaxPriceValue(e.target.value);
    };

    function handleMinPrice(e) {
        setSearchMinPriceValue(e.target.value);
    };
    /*  console.log(filterFlights); */

    return (
        <main className='main__container'>
            <SearchForm
                flightsData={flightsData}
                isPriceUp={isPriceUp}
                isPriceDown={isPriceDown}
                checkedPriceUp={handleChekPriceUp}
                checkedPriceDown={handleChekPriceDown}
                checkedFilterByDuration={checkedFilterByDuration}
                checkedFilterByMinPrice={checkedFilterByMinPrice}
                checkedFilterByAnotherAirlines={checkedFilterByAnotherAirlines}
                sortFlightsByPrice={sortFlightsByPrice}
                sortFlightsByDuration={sortFlightsByDuration}
                filterFlightsByTransfer={filterFlightsByTransfer}
                filterByMinPrice={filterByMinPrice}
                filterByAnotherAirlines={filterByAnotherAirlines}
                searchMinPrice={searchMinPriceValue}
                handleMinPrice={handleMinPrice}
                searchMaxPrice={searchMaxPriceValue}
                handleMaxPrice={handleMaxPrice}
                onSearchFlights={searchByPrice}
            />
            <CardList flights={filterFlights} />
        </main>
    )
}
export default Main;
