//importo dalle dipendenze
import 'bootstrap/dist/css/bootstrap.min.css'
//questa riga ha importato il foglio css di bootstrap in TUTTO IL PROGETTO
//graffe FONDAMENTALI perchè NON SONO DI DEFAULT
//i componenti che dichiariamo noi saranno UNO per file quindi li si possono esportare come default quindi importre senza graffe
import LibFooter from '../components/LibFooter'
import LibHomepage from '../components/LibHomepage'
import LibNavbar from '../components/LibNavbar'
function App() {

  return (
    <>
    <header>
    <LibNavbar />
    </header>
    <main>
    <LibHomepage />
    </main>
    <footer>
    <LibFooter />
    </footer>
    </>
  )
}

export default App
