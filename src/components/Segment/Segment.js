import { React } from 'react';
import Clock from '../../images/clock.svg'

function Segment() {
    return (
        <div className='segment'>
            <div className='segment__flight'>
                <p className='segment__capital-departure'>Moscow,</p>
                <p className='segment__airport-departure'>Sheremetevo</p>
                <p className='segment__airport-departure-uid'>(SVO)&rarr;</p>
                <p className='segment__capital-arrival'>London,</p>
                <p className='segment__airport-arrival'>Hitrow</p>
                <p className='segment__airport-arrival-uid'>(LHR)</p>
            </div>
            <div className='segment__timing'>
                <div className='segment__timing-item'>
                    <p className='segment__time'>20;40</p>
                    <p className='segment__data'>19 out cp</p>
                </div>

                <div className='segment__duration'>
                    <img className='segment__duration-img' src={Clock} alt='Часы' />
                    <p className='segment__'>14ч 45мин</p>
                </div>
                <div className='segment__timing-item'>
                    <p className='segment__data'>19 out cp</p>
                    <p className='segment__time'>09/25</p>
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