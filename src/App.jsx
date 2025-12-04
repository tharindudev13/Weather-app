import LiveWeather, { weatherLoader } from './components/LiveWeather';
import SearchWeather from './components/SearchWeather';
import RootLayout from './layouts/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


function App(){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} loader={weatherLoader}/>
      
    )
  )

  return(
    <RouterProvider router={router} />
  )

}

export default App;