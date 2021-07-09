import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';


render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// render({
//   return (
//     <div>
//   <h1>It worked.</h1>
//   </div >,
//   document.getElementById('root')

    
//   )
// }
  
//   return (
  
// )


