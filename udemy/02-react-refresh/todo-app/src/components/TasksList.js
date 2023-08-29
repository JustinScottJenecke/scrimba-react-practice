import Task from "./Task";

const TasksList = () => {

    const dateConversion = (date) => {
        alert( new Date('02/06/2023'))
    }

    return (
        <main>
            <h2 className="subtitle">Backlog</h2>
            <button>Clear All</button>
            <ul>
                <li>
                    <Task name='Career coaching profile reviews' for='Nicole' date='31/08/2023' passedFunction={dateConversion}/>
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

export default TasksList;