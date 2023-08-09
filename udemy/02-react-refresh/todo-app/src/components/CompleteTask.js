const CompleteTask = (props) => {

    const deleteTask = () => {
        props.removeModal();
        alert('Task was deleted: ' + props.task)
    }

    return (
        <div className='complete-task'>
            <h4>Confirm the completion of task?</h4>
            <div className="complete-task-buttons">
                <button className="button is-danger is-light" onClick={props.removeModal}>Cancel</button>
                <button className="button is-danger" onClick={ deleteTask }>Confirm</button>
            </div>
        </div>
    )
}

export default CompleteTask