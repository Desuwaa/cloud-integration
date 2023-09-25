import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Map from './components/Maps';

const location = {
  address: 'Lagos NG, 9 Emma Abimbola Cole, Lekki Phase 1 106104, Street',
  lat: 6.4426349, // Latitude of your desired center
  lng: 3.4760261, // Longitude of your desired center
} // our location object from earlier

const App = () => {
  return (
    <div className="App">
      
      <Map location={location} zoomLevel={17} /> 
      <Contact />
    </div>
  )
}

export default App