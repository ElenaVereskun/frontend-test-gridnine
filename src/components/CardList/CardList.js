import { React, useState } from 'react';
import Card from '../Card/Card';


function CardList({ flights }) {

    const [flightsView, setFlightsView] = useState(2);

    function handleMoreClick() {
        setFlightsView(flightsView + 2);
    }

    return (
        <>
            <section className='card-list'>
                <ul className='card-list__container'>
                {flights.slice(0, flightsView).map((card) => (                    
                        <Card card={card} />
                    ))}
                </ul>
                <button className='card-list__more'
                    onClick={handleMoreClick}>Показать ещё</button>
            </section>
        </>
    )
}
export default CardList;