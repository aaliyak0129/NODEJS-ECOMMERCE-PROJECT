import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './redux/Store.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
     <Provider store={store}>
    <App />
  </Provider>

    </BrowserRouter>
  </StrictMode>,
)
