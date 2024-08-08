import { RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
//import { Login } from './pages/Login';
import './styles/global.css';
import { router } from './routes';

function App() {
	return <RouterProvider router={router} />;
}

export default App
