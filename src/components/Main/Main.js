import { React, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';
import FlightsData from '../../utils/flights.json';

function Main() {
    const [isPriceUp, setIsPriceUp] = useState(false);
    const [isPriceDown, setIsPriceDown] = useState(false);
    const [isFilterByDuration, setIsFilterByDuration] = useState(false);

    //исходный массив оьектов
    const flightsData = FlightsData.result.flights;

    //поиск минимальной цены
    const amount = flightsData.map(function (item) {
        return item.flight.price.total.amount;
    });
    const minPrice = Math.min(...amount);

    const airlines = flightsData.find((item) => {
        return item.flight.price.total.amount == minPrice;
    });

    function filterFlightsByPrice() {
        flightsData.sort((a, b) => {
            if (isPriceUp === true && isPriceDown === false) {
                return (b.flight.price.total.amount) - (a.flight.price.total.amount);
            }
            if (isPriceUp === false && isPriceDown === true) {
                return (a.flight.price.total.amount) - (b.flight.price.total.amount);
            }
            else {
                return flightsData;
            }
        })
    };

    function filterFlightsByDuration() {
        flightsData.sort((a, b) => {
            if (isFilterByDuration === true) {
                return (b.flight.legs[0].duration) - (a.flight.legs[0].duration);
            }
            else {
                return flightsData;
            }
        })
    };

    console.log(flightsData);

    function handleChekPriceUp() {
        setIsPriceUp(true);
        setIsPriceDown(false);
    };

    function handleChekPriceDown() {
        setIsPriceDown(true);
        setIsPriceUp(false);
    };

    function checkedFilterByDuration() {
        setIsFilterByDuration(true);
    };

    return (
        <main className='main__container'>
            <SearchForm minPrice={minPrice}
                airlines={airlines}
                checkedPriceUp={handleChekPriceUp}
                checkedPriceDown={handleChekPriceDown}
                checkedFilterByDuration={checkedFilterByDuration}
                filterFlightsByPrice={filterFlightsByPrice}
                filterFlightsByDuration={filterFlightsByDuration}
            />
            <CardList flights={flightsData} />
        </main>
    )
}
export default Main;
