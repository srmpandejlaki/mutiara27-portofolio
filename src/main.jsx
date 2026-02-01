import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './views/App.jsx';

import './styles/style';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
