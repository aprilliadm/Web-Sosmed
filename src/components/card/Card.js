import bulat from './bulat.jpg';
import './card.css';

const Card = () => {
    return (
        <div class="card">
        <div class="card-top">
            <h1>Card </h1>    
        </div>
        <div class="card-body">
            <img src={bulat}></img>
        </div>
        <div>
            <p> Keterangan dalam Card komponen</p>
            </div>
        </div>
    )
}

export default Card;