import classes from './MainLayout.module.css'
import Nav from './Nav'

const MainLayout = (props) => {
    return (
        <div>
            <Nav/>
            <main className={classes.body}>
                {props.children}
            </main>
        </div>
    )
}

export default MainLayout