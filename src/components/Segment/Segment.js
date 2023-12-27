import { React } from 'react';
import Clock from '../../images/clock.svg'

function Segment({ departureCity,
    departureAirport,
    departureAirportUid,
    arrivalCity,
    arrivalAirport,
    arrivalAirportUid,
    departureDate,
    duration,
    arrivalDate
}) {

    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    //Перевод даты в нужный формат
    const stringDepartureDate = new String(departureDate);
    const stringArrivalDate = new String(arrivalDate);

    const departureTime = stringDepartureDate.substring(11, 16);//Время вылета
    const arrivalTime = stringArrivalDate.substring(11, 16);//Время прилета

    console.log(departureTime);
    console.log(arrivalTime);





    /* console.log(str.toLocaleDateString(undefined, { weekday: 'long' })); */

    return (
        <div className='segment'>
            <div className='segment__flight'>
                <p className='segment__capital-departure'>{departureCity},</p>
                <p className='segment__airport-departure'>{departureAirport}</p>
                <p className='segment__airport-departure-uid'>({departureAirportUid})&rarr;</p>
                <p className='segment__capital-arrival'>{arrivalCity},</p>
                <p className='segment__airport-arrival'>{arrivalAirport}</p>
                <p className='segment__airport-arrival-uid'>({arrivalAirportUid})</p>
            </div>
            <div className='segment__timing'>
                <div className='segment__timing-item'>
                    <p className='segment__time'>{departureTime}</p>
                    <p className='segment__data'>19 out cp</p>
                </div>

                <div className='segment__duration'>
                    <img className='segment__duration-img' src={Clock} alt='Часы' />
                    <p className='segment__duration'>{hours}ч {minutes}мин</p>
                </div>
                <div className='segment__timing-item'>
                    <p className='segment__data'>{arrivalDate}</p>
                    <p className='segment__time'>{arrivalTime}</p>
                </div>

            </div>
            <div className='segment__stops'>
                <p className='segment__stop'>1 пересадка</p>
                <hr className='segment__line'></hr>
            </div>

            <p className='segment__airlines'>Рейс выполняет: LOT Polish Airlines</p>
        </div>
    )
}
export default Segment;