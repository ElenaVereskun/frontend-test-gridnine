import { React, useEffect, useState } from 'react';
import Card from '../Card/Card';


function CardList({flights}) {

    

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
                    {flights.map((card) => (
                        /*   <Card card={card}
                              price={card.flight.price.total.amount}
                              departureCity={card.flight.legs[0].segments[0].departureCity.caption}
                              departureAirport={card.flight.legs[0].segments[0].departureAirport.caption}
                              departureAirportUid={card.flight.legs[0].segments[0].departureAirport.uid}
                              arrivalCity={card.flight.legs[0].segments[0].arrivalCity.caption}
                              arrivalAirport={card.flight.legs[0].segments[0].arrivalAirport.caption}
                              arrivalAirportUid={card.flight.legs[0].segments[0].arrivalAirport.uid}
                              duration={card.flight.legs[0].duration}
                              departureDate={card.flight.legs[0].segments[0].departureDate}
                              arrivalDate={card.flight.legs[0].segments[0].arrivalDate}
                          /> */
                        <Card card={card} />
                    ))}
                </ul>
            </section>
        </>
    )
}
export default CardList;