import { React } from 'react';
import Segment from '../Segment/Segment';


function Card({ flight }) {
    return (
        <li className='card'>
            <div className='card__heading'>
                <img className='card__logo' src='#' alt='логотип' />
                <div>
                    <p className='card__prise'>21049 ₽</p>
                    <p className='card__prise-caption'>Стоимость для одного взрослого пассажира</p>
                </div>
            </div>
            <Segment />
            <Segment />
            <button className='card__button'>ВЫБРАТЬ</button>

            {/* <div className='card__segment'>
                <div className='card__flight'>
                    <p className='card__capital-departure'>Moscow,</p>
                    <p className='card__airport-departure'>Sheremetevo</p>
                    <p className='card__airport-departure-uid'>(SVO)&rarr;</p>
                    <p className='card__capital-arrival'>London,</p>
                    <p className='card__airport-arrival'>Hitrow</p>
                    <p className='card__airport-arrival-uid'>(LHR)</p>
                </div>
                <div className='card__timing'>
                    <div className='card__timing-item'>
                        <p className='card__time'>20;40</p>
                        <p className='card__data'>19 out cp</p>
                    </div>

                    <div className='card__duration'>
                        <img className='card__duration-img' src={Clock} alt='Часы' />
                        <p className='card__'>14ч 45мин</p>
                    </div>
                    <div className='card__timing-item'>
                        <p className='card__data'>19 out cp</p>
                        <p className='card__time'>09/25</p>
                    </div>

                </div>
                <p className=''>1 пересадка</p>
                <p className=''>Рейс выполняет: LOT Polish Airlines</p>
            </div> */}
        </li>
    )
}
export default Card;