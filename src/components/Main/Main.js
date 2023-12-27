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
    //исходный массив оьектов
    const flightsData = FlightsData.result.flights;
    let filteredFlights = [];

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

    //поиск минимальной цены
    function filterByMinPrice() {
        flightsData.sort((a, b) => {
            if(isFilterByMinPrice === true){
                return (a.flight.price.total.amount) - (b.flight.price.total.amount);
            }else{
                return flightsData;
            }
            
        }).shift();
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
    }



    const filterByPrice = flightsData.sort((a, b) => {
        return (a.flight.price.total.amount) - (b.flight.price.total.amount);
    });
    const minPrice = filterByPrice.shift();


    const minPriceAnotherAirlines = filterByPrice.find((item) => {
        return item.flight.carrier.caption !== minPrice.flight.carrier.caption;
    });


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

    function checkedFilterByMinPrice() {
        setIsFilterByMinPrice(true);
    };

    function checkedFilterByAnotherAirlines() {
        setIsFilterByAnotherAirlines(true);;
    };

    console.log(flightsData);

    return (
        <main className='main__container'>
            <SearchForm minPrice={minPrice.flight.price.total.amount}
                airlines={minPrice.flight.carrier.caption}
                anotherMinPrice={minPriceAnotherAirlines.flight.price.total.amount}
                anotherAirlines={minPriceAnotherAirlines.flight.carrier.caption}
                checkedPriceUp={handleChekPriceUp}
                checkedPriceDown={handleChekPriceDown}
                checkedFilterByDuration={checkedFilterByDuration}
                checkedFilterByMinPrice={checkedFilterByMinPrice}
                checkedFilterByAnotherAirlines={checkedFilterByAnotherAirlines}
                filterFlightsByPrice={filterFlightsByPrice}
                filterFlightsByDuration={filterFlightsByDuration}
                filterByMinPrice={filterByMinPrice}
                filterByAnotherAirlines={filterByAnotherAirlines}
            />
            <CardList flights={flightsData} />
        </main>
    )
}
export default Main;
