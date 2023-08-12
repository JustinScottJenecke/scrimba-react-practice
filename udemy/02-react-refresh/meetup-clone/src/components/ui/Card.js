import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card}>
            {/* 
             * Children props passes in content between opening and closing tags of component element
             */}
            {props.children}
        </div>
    )    
}

export default Card