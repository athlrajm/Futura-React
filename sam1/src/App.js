
import React from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Redux1 from './Component/Redux1';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Redux1/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
    
  );
}

export default App;
