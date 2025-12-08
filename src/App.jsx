import LiveWeather, { weatherLoader } from './components/LiveWeather';
import SearchWeather from './components/Details';
import RootLayout from './layouts/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Error from './components/Error';


function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} loader={weatherLoader} errorElement={<Error />}/>
      
    )
  )

  return(
    <RouterProvider router={router} />
  )

}

export default App;