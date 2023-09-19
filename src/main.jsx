
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/routes.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={routes}>
        </RouterProvider>

        <ToastContainer />

      </div>
      </QueryClientProvider>
    </AuthProvider>
  

  // </React.StrictMode>,
)
