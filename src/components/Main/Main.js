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
    /* 
        const [isFilterByMinPrice, setIsFilterByMinPrice] = useState(false);
        const [isFilterByAnotherAirlines, setIsFilterByAnotherAirlines] = useState(false); */

    const [searchMinPriceValue, setSearchMinPriceValue] = useState('');
    const [searchMaxPriceValue, setSearchMaxPriceValue] = useState('');

    //исходный массив оьектов
    const flightsData = FlightsData.result.flights;

    const [filterFlights, setFilterFlights] = useState(flightsData);


    /* useEffect(() => {
        searchByPrice();
    }, [searchMinPriceValue, searchMaxPriceValue]); */

    function sortFlightsByPrice() {
        if (isPriceUp && !isPriceDown) {
            console.log("по возрастанию");
            flightsData.sort((a, b) => {
                return a.flight.price.total.amount - b.flight.price.total.amount;
            })
        }
        if (!isPriceUp && isPriceDown) {
            console.log("по уьыванию");
            flightsData.sort((a, b) => {
                return b.flight.price.total.amount - a.flight.price.total.amount;
            })
        }
        if (!isPriceUp && !isPriceDown) {
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

    /*     const filterByPrice = flightsData.sort((a, b) => {
            return (a.flight.price.total.amount) - (b.flight.price.total.amount);
        });
    
        const minPrice = filterByPrice.shift();
    
        console.log(minPrice);
    
        const anotherMinPrice = filterByPrice.find((item) => {
            return item.flight.carrier.caption !== minPrice.flight.carrier.caption;
        }); */

    /*     function filterByMinPrice() {
            const flightsData = FlightsData.result.flights;
            if (isFilterByMinPrice) {
                const flightsByAirlines = flightsData.filter((item) => {
                    return item.flight.carrier.caption === minPrice.flight.carrier.caption;
                })
                console.log(flightsByAirlines);
                setFilterFlights(flightsByAirlines);
            } else {
                return flightsData;
            }
        };
    
        function filterByAnotherAirlines() {
            if (isFilterByAnotherAirlines) {
                const flightsByAnotherAirlines = flightsData.filter((item) => {
                    return item.flight.carrier.caption === anotherMinPrice.flight.carrier.caption;
                })
                console.log(flightsByAnotherAirlines);
                setFilterFlights(flightsByAnotherAirlines);
            } else {
                return flightsData;
            }
        }; */

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

    /*     function checkedFilterByMinPrice(e) {
            setIsFilterByMinPrice(e.target.checked);
        };
    
        function checkedFilterByAnotherAirlines(e) {
            setIsFilterByAnotherAirlines(e.target.checked);
        }; */

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

            /*     filterByMinPrice={filterByMinPrice}
                filterByAnotherAirlines={filterByAnotherAirlines}
                minPrice={minPrice}
                anotherMinPrice={anotherMinPrice}
                checkedFilterByMinPrice={checkedFilterByMinPrice}
                checkedFilterByAnotherAirlines={checkedFilterByAnotherAirlines} */
            />
            <CardList flights={filterFlights} />
        </main>
    )
}
export default Main;
