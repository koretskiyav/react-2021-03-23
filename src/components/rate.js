import { ReactComponent as HalfStar } from '../icons/star-half.svg';
import { ReactComponent as Star } from '../icons/star.svg';
import cls from './rate.module.css'

const Rate = props => {
    const rate = [];
    for (let i = 1; i <=5; i++) {
        const dif = props.value - i;

        // Заполненная звезда
        if (dif >= 0) {
            rate.push('full');
        }
        // Половина звезды
        else if (dif < 0 && dif > -1) {
            rate.push('half');
        }
        // Пустая звезда
        else {
            rate.push('empty');
        }
    }

    return (
        <div>
            {rate.map((starType) => {
                switch (starType) {
                    case 'full':
                        return (<Star className={cls.filled}/>);
                    case 'half':
                        return (<HalfStar className={cls.filled}/>);
                    case 'empty':
                        return (<Star className={cls.empty}/>);
                }
            })}
        </div>
    )
}

export default Rate;