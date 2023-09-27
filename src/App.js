import * as data from './Data/data';
import { useEffect } from 'react';
import { SideBar } from './Components/SideBar';

function App() {
  useEffect(() => {
    (() => {
      localStorage.setItem('services', JSON.stringify(data.services));
      localStorage.setItem('hours', JSON.stringify(data.available_hours));
      localStorage.setItem('professionals', JSON.stringify(data.professionals));
    })();
  }, []);

  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
