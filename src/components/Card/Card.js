import { React } from 'react';
import Flight from '../Flight/Flight';

function Card({ card }) {

    return (
        <li className='card'>
            <div className='card__heading'>
                <p className='card__airlines'>{card.flight.legs[0].segments[0].airline.uid}</p>
                <div>
                    <p className='card__prise'>{card.flight.price.total.amount} ₽</p>
                    <p className='card__prise-caption'>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <Flight
                departureCity={card.flight.legs[0].segments[0].departureCity.caption}
                departureAirport={card.flight.legs[0].segments[0].departureAirport.caption}
                departureAirportUid={card.flight.legs[0].segments[0].departureAirport.uid}
                arrivalCity={card.flight.legs[0].segments[0].arrivalCity.caption}
                arrivalAirport={card.flight.legs[0].segments[0].arrivalAirport.caption}
                arrivalAirportUid={card.flight.legs[0].segments[0].arrivalAirport.uid}
                duration={card.flight.legs[0].duration}
                departureDate={card.flight.legs[0].segments[0].departureDate}
                arrivalDate={card.flight.legs[0].segments[0].arrivalDate}
                airlinesUid={card.flight.legs[0].segments[0].airline.uid}
                airlines={card.flight.legs[0].segments[0].airline.caption}
                transfer={card.flight.legs[0].segments.length - 1} />
            <hr className='card__line'></hr>
            <Flight
                departureCity={card.flight.legs[0].segments[0].departureCity.caption}//????????
                departureAirport={card.flight.legs[1].segments[0].departureAirport.caption}
                departureAirportUid={card.flight.legs[1].segments[0].departureAirport.uid}
                arrivalCity={card.flight.legs[1].segments[0].arrivalCity.caption}
                arrivalAirport={card.flight.legs[1].segments[0].arrivalAirport.caption}
                arrivalAirportUid={card.flight.legs[1].segments[0].arrivalAirport.uid}
                duration={card.flight.legs[1].duration}
                departureDate={card.flight.legs[1].segments[0].departureDate}
                arrivalDate={card.flight.legs[1].segments[0].arrivalDate}
                airlinesUid={card.flight.legs[1].segments[0].airline.uid}
                airlines={card.flight.legs[1].segments[0].airline.caption}
                transfer={card.flight.legs[1].segments.length - 1} />

            <button className='card__button'>ВЫБРАТЬ</button>
        </li>
    )
}
export default Card;