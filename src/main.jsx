//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Ecommerce/App.jsx'
import DataProvider from "./Ecommerce/Context/Context.jsx";
createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <DataProvider>
   <App />
  </DataProvider>
    
  //</StrictMode>,
)
