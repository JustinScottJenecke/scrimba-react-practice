import Card from '../ui/Card'
import classes from './Meetups.module.css'

const MeetupCard = (props) => {
    return (
        <li className={classes.cardcontent}>
            <Card>
                <figure className="image">
                    <img src={props.meetup.image} alt={props.meetup.name}/>
                </figure>
                <div>
                    <h3>{props.meetup.name}</h3>
                    <address>{props.meetup.address}</address>
                    <p>{props.meetup.description}</p>
                </div>
                <div className='my-2'>
                    <button className="button is-danger is-outlined">Favorite</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupCard