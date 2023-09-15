
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/routes.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <div>
    <RouterProvider router={routes}>
    </RouterProvider>

    <ToastContainer />

  </div>

  // </React.StrictMode>,
)
