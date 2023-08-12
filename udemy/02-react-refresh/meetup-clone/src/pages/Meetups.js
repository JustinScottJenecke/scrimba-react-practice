import { MEETUPS } from '../data/dummy'
//import MeetupList from '../components/meetups/MeetupList'
import MeetupList from "../components/meetups/MeetupList";

const MeetupsPage = () => {
    return (
        <section>
            <h1 className="title">All Meetups</h1>
            { <MeetupList meetups={MEETUPS}/> }
        </section>
    )
}

export default MeetupsPage