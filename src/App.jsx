//importo dalle dipendenze
import 'bootstrap/dist/css/bootstrap.min.css'
//questa riga ha importato il foglio css di bootstrap in TUTTO IL PROGETTO
//graffe FONDAMENTALI perchè NON SONO DI DEFAULT
//i componenti che dichiariamo noi saranno UNO per file quindi li si possono esportare come default quindi importre senza graffe
import RestNavbar from '../components/RestNavbar'
import RestFooter from '../components/RestFooter'
import RestHomepage from '../components/RestHomepage'
function App() {

  return (
    <>
    <header>
    <RestNavbar />
    </header>
    <main>
    <RestHomepage />
    </main>
    <footer>
    <RestFooter />
    </footer>
    </>
  )
}

export default App
