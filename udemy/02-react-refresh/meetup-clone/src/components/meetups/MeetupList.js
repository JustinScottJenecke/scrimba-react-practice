import MeetupCard from "./MeetupCard"
import classes from './Meetups.module.css'

const MeetupList = (props) => {
    return (
        <ul className={classes.meetupgrid}>
          {props.meetups.map( (meetup) => <MeetupCard key={meetup.id} meetup={meetup}/>)}      
        </ul>
    )
}

export default MeetupList