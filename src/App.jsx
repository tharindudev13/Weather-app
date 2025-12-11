import LiveWeather, { weatherLoader } from './components/LiveWeather';
import SearchWeather from './components/Details';
import RootLayout from './layouts/RootLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,Routes } from 'react-router-dom';
import Error from './components/Error';
import SearchCity,{searchLoader} from './components/searchCity';
import { AppContext } from './components/AppContext';
import { useState } from 'react';
import SearchLayout from './layouts/SearchLayout';


function App(){
  const [city,setCity] = useState("")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />} loader={weatherLoader} errorElement={<Error />}/>
        <Route path='/search/:city' element={<SearchLayout />} loader={searchLoader} />

      </Route>
    )
  )

  return(
    <AppContext.Provider value={{city,setCity}}>
        <RouterProvider router={router} />
    </AppContext.Provider>
  )

}

export default App;