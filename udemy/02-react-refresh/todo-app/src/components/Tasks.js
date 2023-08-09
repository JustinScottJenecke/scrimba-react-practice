import Task from "./Task";

const Tasks = () => {
    return (
        <main>
            <h2 className="subtitle">Backlog</h2>
            <button>Clear All</button>
            <ul>
                <li>
                    <Task name='Career coaching profile reviews' for='Nicole' date='Thursday'/>
                </li>
                <li>
                    <Task name='Complete React course' for='JSP Course' date='September'/>
                </li>
                <li>
                    <Task name='ITW Content Handover' for='Dave' date='Wednesday'/>
                </li>
            </ul>
        </main>
    )
}

export default Tasks;