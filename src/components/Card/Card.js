import { React } from 'react';
import Flight from '../Flight/Flight';


function Card({ card }) {

    const firstSegment = card.flight.legs[0].segments[0];

    return (
        <li className='card'>
            <div className='card__heading'>
                <img className='card__logo' src='#' alt='логотип' />
                <div>
                    <p className='card__prise'>{card.flight.price.total.amount} ₽</p>
                    <p className='card__prise-caption'>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            {/*  <Segment departureCity={props.departureCity}
            departureAirport={props.departureAirport}
            departureAirportUid={props.departureAirportUid}
            arrivalCity={props.arrivalCity}
            arrivalAirport={props.arrivalAirport}
            arrivalAirportUid={props.arrivalAirportUid}
            duration={props.duration}
            departureDate={props.departureDate}
            arrivalDate={props.arrivalDate}
            /> */}
            {/*            <Segment
                departureCity={card.flight.legs[0].segments[0].departureCity.caption}
                departureAirport={card.flight.legs[0].segments[0].departureAirport.caption}
                departureAirportUid={card.flight.legs[0].segments[0].departureAirport.uid}
                arrivalCity={card.flight.legs[0].segments[0].arrivalCity.caption}
                arrivalAirport={card.flight.legs[0].segments[0].arrivalAirport.caption}
                arrivalAirportUid={card.flight.legs[0].segments[0].arrivalAirport.uid}
                duration={card.flight.legs[0].duration}
                departureDate={card.flight.legs[0].segments[0].departureDate}
                arrivalDate={card.flight.legs[0].segments[0].arrivalDate} />
             <Segment
                departureCity={card.flight.legs[1].segments[0].departureCity.caption}
                departureAirport={card.flight.legs[1].segments[0].departureAirport.caption}
                departureAirportUid={card.flight.legs[1].segments[0].departureAirport.uid}
                arrivalCity={card.flight.legs[1].segments[0].arrivalCity.caption}
                arrivalAirport={card.flight.legs[1].segments[0].arrivalAirport.caption}
                arrivalAirportUid={card.flight.legs[1].segments[0].arrivalAirport.uid}
                duration={card.flight.legs[1].duration}
                departureDate={card.flight.legs[1].segments[0].departureDate}
                arrivalDate={card.flight.legs[1].segments[0].arrivalDate} /> */}

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
                hasTransfer={card.flight.legs[0].segments.length} />
            <button className='card__button'>ВЫБРАТЬ</button>
        </li>
    )
}
export default Card;