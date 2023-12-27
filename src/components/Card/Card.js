import { React } from 'react';
import Segment from '../Segment/Segment';


function Card(props) {
    return (
        <li className='card'>
            <div className='card__heading'>
                <img className='card__logo' src='#' alt='логотип' />
                <div>
                    <p className='card__prise'>{props.price} ₽</p>
                    <p className='card__prise-caption'>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <Segment departureCity={props.departureCity}
            departureAirport={props.departureAirport}
            departureAirportUid={props.departureAirportUid}
            arrivalCity={props.arrivalCity}
            arrivalAirport={props.arrivalAirport}
            arrivalAirportUid={props.arrivalAirportUid}
            duration={props.duration}
            departureDate={props.departureDate}
            arrivalDate={props.arrivalDate}
            />
            <Segment />
            <button className='card__button'>ВЫБРАТЬ</button>
        </li>
    )
}
export default Card;