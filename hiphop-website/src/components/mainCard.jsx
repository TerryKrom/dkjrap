import React from 'react';
import { Link } from 'react-router-dom';
import './mainCard.css';

const MainCard = ({ props }) => {

    const months = {
        1: 'Jan',
        2: 'Fev',
        3: 'Mar',
        4: 'Abr',
        5: 'Mai',
        6: 'Jun',
        7: 'Jul',
        8: 'Ago',
        9: 'Set',
        10: 'Out',
        11: 'Nov',
        12: 'Dec',
    }

    const dateFixer = (date) => {
        let arrDate = date.split("-");
        arrDate[1] = months[parseInt(arrDate[1])]
        return arrDate.join(' ')
    }

    return (
            <div className="main-card"
                onMouseEnter={(e) => e.currentTarget.classList.add('hover')}
                onMouseLeave={(e) => e.currentTarget.classList.remove('hover')}>
                    <Link to={props.src} target={props.target}>
        
                <div className="main-card-img">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="main-card-body">
                    <p className='card-date'>{dateFixer(props.date)}</p>
                    <h2 className='card-title'>{props.title}</h2>
                    <p className='card-text'>{props.text}</p>
                    <h3>Confira já!</h3>
                </div>
                </Link>
            </div>
    );
}

export default MainCard;