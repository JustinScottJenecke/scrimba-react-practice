import Overlay from "./Overlay";
import CompleteTask from "./CompleteTask";
import { useState } from "react";

const Task = (props) => {

    const [modalStatus, toggleModal] = useState(false);

    const completeBtnHandler = () => {
        toggleModal(true)
    }
    const removeModalHandler = () => {
        toggleModal(false)
    }

    return (
        <span>
            <div className="box my-3 mx-4">
                <h3 className="subtitle mb-2">{props.name}</h3>
                <div>For: {props.for}</div>
                <div>Due date: {props.date}</div>
                <div>
                    {/* <button className="button is-warning mr-1" onClick={completeBtnHandler}>Complete</button> */}
                    <button className="button is-warning mr-1" onClick={completeBtnHandler}>
                        Complete
                    </button>
                    <button className="button is-info ml-1">Update</button>
                </div>

                { modalStatus ? <Overlay/> : null }
                { modalStatus ? <CompleteTask task={props.name} removeModal={removeModalHandler} /> : null }
                
            </div>
        </span>

    );
}

export default Task;