import { React } from 'react';
import Flight from '../Flight/Flight';

function Card({ card }) {

    const transfer = card.flight.legs[0].segments.length - 1;
    const transferBack = card.flight.legs[1].segments.length - 1;

    const classTransfer = (
        `flight__stop ${(transfer !== 0) && 'flight__stop_active'}`
    );

    const countTransfer = `${transfer === 1 ? '1 пересадка' : ' '}`
    //перелет туда
    let arrival;
    if (transfer === 0) {
        arrival = card.flight.legs[0].segments[0];
    } else {
        arrival = card.flight.legs[0].segments[1];
    };
    //перелет обратно
    let arrivalBack;
    if (transferBack === 0) {
        arrivalBack = card.flight.legs[1].segments[0];
    } else {
        arrivalBack = card.flight.legs[1].segments[1];
    };

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
                arrivalCity={arrival.arrivalCity.caption}
                arrivalAirport={arrival.arrivalAirport.caption}
                arrivalAirportUid={arrival.arrivalAirport.uid}
                duration={card.flight.legs[0].duration}
                departureDate={card.flight.legs[0].segments[0].departureDate}
                arrivalDate={card.flight.legs[0].segments[0].arrivalDate}
                airlinesUid={card.flight.legs[0].segments[0].airline.uid}
                airlines={card.flight.legs[0].segments[0].airline.caption}
                classTransfer={classTransfer}
                countTransfer={countTransfer} />
            <hr className='card__line'></hr>
            <Flight
                departureCity={card.flight.legs[1].segments[0].departureCity.caption}
                departureAirport={card.flight.legs[1].segments[0].departureAirport.caption}
                departureAirportUid={card.flight.legs[1].segments[0].departureAirport.uid}
                arrivalCity={arrivalBack.arrivalCity.caption}
                arrivalAirport={arrivalBack.arrivalAirport.caption}
                arrivalAirportUid={arrivalBack.arrivalAirport.uid}
                duration={card.flight.legs[1].duration}
                departureDate={card.flight.legs[1].segments[0].departureDate}
                arrivalDate={card.flight.legs[1].segments[0].arrivalDate}
                airlinesUid={card.flight.legs[1].segments[0].airline.uid}
                airlines={card.flight.legs[1].segments[0].airline.caption}
                classTransfer={classTransfer}
                countTransfer={countTransfer} />

            <button className='card__button'>ВЫБРАТЬ</button>
        </li>
    )
}
export default Card;