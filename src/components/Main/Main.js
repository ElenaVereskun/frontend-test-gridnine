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


  /*  useEffect(() => {
        filterByMinPrice();
    }, []); */

    function sortFlightsByPrice() {
        if (isPriceUp && !isPriceDown) {
            console.log("по возрастанию");
            const sortPriceUp = flightsData.sort((a, b) => {
                return a.flight.price.total.amount - b.flight.price.total.amount;
            })
            setFilterFlights(sortPriceUp);       
        }
        if (!isPriceUp && isPriceDown) {
            console.log("по уьыванию");
            const sortPriceDown = flightsData.sort((a, b) => {
                return b.flight.price.total.amount - a.flight.price.total.amount;
            })
            console.log(sortPriceDown);
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

    //Определение компании с мин ценой
    const airlines = localStorage.getItem('airlines');
    console.log(airlines);
    const ahotherAirlines = localStorage.getItem('ahotherAirlines');
    console.log(ahotherAirlines);

    function filterByMinPrice() {
        
        if (isFilterByMinPrice && !isFilterByAnotherAirlines) {
            console.log('by min price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === airlines;
            })
        }
        if (!isFilterByMinPrice && isFilterByAnotherAirlines) {
            console.log('by min other price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === ahotherAirlines;
            })
        }
        if (isFilterByMinPrice && isFilterByAnotherAirlines) {
            console.log('bouth price');
            flightsData.filter((item) => {
                return item.flight.carrier.caption === ahotherAirlines &&
                    item.flight.carrier.caption === airlines;
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
