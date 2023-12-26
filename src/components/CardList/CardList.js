import { React, useEffect, useState } from 'react';
import Card from '../Card/Card';
import Flights from '../../utils/flights.json';

function CardList() {

    console.log(Flights);


    console.log(Flights.result);


    console.log(Flights.result.flights);//массив объектов

    const [moviesView, setMoviesView] = useState('');

    function compareMovie(savedFilms, movie) {
        return savedFilms.some((savedFilm) => savedFilm.movieId === movie.id);
    }

    /*     function moviesToOpen() {
            window.addEventListener('resize', moviesToOpen);
            if (window.innerWidth < MOBILE_VIEW) {
                setMoviesView(MOBILE_COUNT);
            }
            if (MOBILE_VIEW < window.innerWidth < MOBILE_MEDIUM_VIEW) {
                setMoviesView(MOBILE_COUNT);
            }
            if (MOBILE_MEDIUM_VIEW < window.innerWidth < PAD_VIEW) {
                setMoviesView(PAD_COUNT);
            }
            if (PAD_VIEW < window.innerWidth < DESKTOP_VIEW) {
                setMoviesView(PAD_COUNT);
            }
            if (DESKTOP_VIEW < window.innerWidth) {
                setMoviesView(DESKTOP_COUNT);
            }
        }
    
        function handleMoreClick() {
            if (MOBILE_VIEW < window.innerWidth < PAD_VIEW) {
                setMoviesView(moviesView + 2);
            }
            if (PAD_VIEW < window.innerWidth < DESKTOP_VIEW) {
                setMoviesView(moviesView + 2);
            }
            if (DESKTOP_VIEW < window.innerWidth) {
                setMoviesView(moviesView + 3);
            }
        }
    
        useEffect(() => {
            moviesToOpen();
            window.removeEventListener('resize', moviesToOpen);
        }, []); */

    return (
        <>
            <section className='card-list'>
                <ul className='card-list__container'>
                    <Card />
                    <Card />
                </ul>
            </section>
        </>
    )
}
export default CardList;