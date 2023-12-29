import { React } from 'react';
import Clock from '../../images/clock.svg'

function Flight({ departureCity,
    departureAirport,
    departureAirportUid,
    arrivalCity,
    arrivalAirport,
    arrivalAirportUid,
    departureDate,
    duration,
    arrivalDate,
    airlinesUid,
    airlines,
    classTransfer,
    countTransfer
}) {

    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);

    //получение даты
    const stringDepartureDate = new String(departureDate);
    const stringArrivalDate = new String(arrivalDate);

    const departureTime = stringDepartureDate.substring(11, 16);//Время вылета
    const arrivalTime = stringArrivalDate.substring(11, 16);//Время прилета

    const departureOnlyDate = stringDepartureDate.substring(0, 10);//Время вылета
    const arrivalOnlyDate = stringArrivalDate.substring(0, 10);//Время прилета

    return (
        <div className='flight'>
            <div className='flight__heading'>
                <p className='flight__capital-departure'>{departureCity},</p>
                <p className='flight__airport-departure'>{departureAirport}</p>
                <p className='flight__airport-departure-uid'>({departureAirportUid})&rarr;</p>
                <p className='flight__capital-arrival'>{arrivalCity},</p>
                <p className='flight__airport-arrival'>{arrivalAirport}</p>
                <p className='flight__airport-arrival-uid'>({arrivalAirportUid})</p>
            </div>
            <div className='flight__timing'>
                <div className='flight__timing-item'>
                    <p className='flight__time'>{departureTime}</p>
                    <p className='flight__data'>{departureOnlyDate}</p>
                </div>

                <div className='flight__duration'>
                    <img className='flight__duration-img' src={Clock} alt='Часы' />
                    <p className='flight__duration'>{hours}ч {minutes}мин</p>
                </div>
                <div className='flight__timing-item'>
                    <p className='flight__data'>{arrivalOnlyDate}</p>
                    <p className='flight__time'>{arrivalTime}</p>
                </div>
            </div>
            <div className='flight__stops'>
                <div className={classTransfer}>{countTransfer}</div>
                <hr className='flight__line'></hr>
            </div>

            <p className='flight__airlines'>Рейс выполняет: {airlinesUid} {airlines}</p>
        </div>
    )
}
export default Flight;