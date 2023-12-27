import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardList from '../CardList/CardList';
import FlightsData from '../../utils/flights.json';

function Main() {
    //исходный массив оьектов
    const flightsData = FlightsData.result.flights;

    //поиск минимальной цены
    const amount = flightsData.map(function (flight) {
        return flight.flight.price.total.amount;
    });
    const minPrice = Math.min(...amount);

    const airlines = flightsData.find((item) => {
        return item.flight.price.total.amount == minPrice;
    });

    const filterFlightsByPrice = flightsData.sort(() => {

    })

    

    amount.sort(function (a, b) { return a - b; });  // сортирует цены по возрастанию
    amount.sort(function (a, b) { return b - a; });  // сортирует цены по убыванию
    console.log(amount);

    return (
        <main className='main__container'>
            <SearchForm minPrice={minPrice}
                airlines={airlines} />
            <CardList flights={flightsData} />
        </main>
    )
}
export default Main;
