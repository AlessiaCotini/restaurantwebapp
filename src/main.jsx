import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//crea un elemento radice e ci ignetta dentro il componente app che da via a tutta l'applicazione
//modalità di sviluppo che crea messaggi di bug non sempre utili e/o necessari



createRoot(document.getElementById('root')).render(
    <App />
)
