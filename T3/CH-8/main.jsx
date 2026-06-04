import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Us2 from './Us2.jsx'
// import Pb359 from './Pb359.jsx'
// import Pb371 from './Pb371.jsx'
// import Uc from './Uc.jsx'
// import PC from './PC.jsx'
import Comp1 from './Comp1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    < Comp1/>
  </StrictMode>,
)
