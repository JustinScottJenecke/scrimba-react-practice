const Header = () => {
    return (
        <header className='header'>
                <button className='logo'>
                    Dev.to
                </button>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </header>
    )
}

const Paragraph = (props) => {
    return (
        <section className='section'>

            <h2>
                {props.paragraphTitle}
            </h2>

            <p>
                lorem ipsumswlgk v;ejrnbrjb;jn  in ijoijoih uygug uygtrdyt gv r efewghrehg re reg
                rgre gergrggre rgrgreg dfvtrhyth rtgwefwefdcvrehgr gregergre trhbgw4gewr getrhthehg 
                g egerergrkgmrlekr vvrkkrv rvlrklekfemdlwe njefn kwerv vjwnew ewofewvelve wrvewvlr
            </p>

            <p>
                lorem ipsumswlgk v;ejrnbrjb;jn  in ijoijoih uygug uygtrdyt gv r efewghrehg re reg
                rgre gergrggre rgrgreg dfvtrhyth rtgwefwefdcvrehgr gregergre trhbgw4gewr getrhthehg 
                g egerergrkgmrlekr vvrkkrv rvlrklekfemdlwe njefn kwerv vjwnew ewofewvelve wrvewvlr
            </p>

            <p>
                lorem ipsumswlgk v;ejrnbrjb;jn  in ijoijoih uygug uygtrdyt gv r efewghrehg re reg
                rgre gergrggre rgrgreg dfvtrhyth rtgwefwefdcvrehgr gregergre trhbgw4gewr getrhthehg 
                g egerergrkgmrlekr vvrkkrv rvlrklekfemdlwe njefn kwerv vjwnew ewofewvelve wrvewvlr
            </p>
        </section>
    )
}

const Footer = () => {
    return (
        <footer>
            <h3>Contact Us</h3>
            <ul className='footer-column'>
                <li>Tel: 04823789t4</li>
                <li>Address: 45 miuntina road, cape town</li>
            </ul>

            <br/>

            <h3>Socials</h3>
            <ul className='footer-column'>
                <li>Facebook: wsejgijg@gmail.com</li>
                <li>Instagram: wsejg@ig</li>
            </ul>
        </footer>
    )
}


const page = (
    <main>
        <Header />
        <Paragraph paragraphTitle='Why choose us?'/>
        <br/>
        <Paragraph paragraphTitle='What we do?'/>
        <Footer />
    </main>
)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(navbar)


ReactDOM.render(page , document.getElementById("root"))