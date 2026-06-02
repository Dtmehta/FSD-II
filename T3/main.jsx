import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
// import Arraymap from './Arraymap.jsx'
// import Image from './Image.jsx'
// import ArrayFilter from './ArrayFilter.jsx'
// import App1 from './Example.jsx'
// import Example from './Example.jsx'
// import Pb311 from './Pb311.jsx'
// import Pb319 from './Pb319.jsx'
// import Event1 from './Event1.jsx'
import Pb310 from './component/Pb310.jsx'
// import Routingmain from './component/Routingmain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Image /> */}
    {/* <Example /> */}
    <Pb310 />
  </StrictMode>,
)
