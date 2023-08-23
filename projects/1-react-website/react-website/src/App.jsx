import Header from './components/header'
import Paragraph from './components/paragraph'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <main>
        <Header />
        <Paragraph paragraphTitle='Why choose us?'/>
        <br/>
        <Paragraph paragraphTitle='What we do?'/>
        <Footer />
    </main>
  )
}

export default App
