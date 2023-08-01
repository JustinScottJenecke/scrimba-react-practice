
const NavBar = () => {
    return (
        <nav>
            <h1 className='header'>
                Hello World
            </h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const Actions = () => {
    return (
        <span>
            <button>Login</button>
            <button>Register</button>
            <button>Search</button>
        </span>
    )
}

ReactDOM.render(
    <div>
        <NavBar/>
        <Actions/>
    </div>
    , 
    document.getElementById('root'));