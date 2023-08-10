import { MEETUPS } from '../data/dummy'

const MeetupsPage = () => {
    return (
        <section>
            <h1 className="title">All Meetups</h1>
            <ul>
                {
                    MEETUPS.map( (meetup) => {
                        return (
                            <li key={meetup.id}>{meetup.title}</li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default MeetupsPage