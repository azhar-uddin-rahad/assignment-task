import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-blue-400">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
