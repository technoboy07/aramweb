// src/components/MapSection.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet's CSS
import L from 'leaflet';

// Import your program data
import { programData } from './mapData';

// FIX for a known issue with react-leaflet where marker icons don't show up
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


function MapSection() {
  // Center of Tamil Nadu
  const mapCenter = [11.1271, 78.6569];

  return (
    <section id="map" className="content-section dark section-hidden">
      <h2>Our Reach Across Tamil Nadu</h2>
      <p>Explore the locations where our programs have made a difference.</p>
      
      <MapContainer center={mapCenter} zoom={7} style={{ height: '600px', width: '100%', borderRadius: '12px', marginTop: '2rem' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {programData.map(program => (
          <Marker key={program.id} position={program.position}>
            <Popup>
              <div className="popup-content">
                <h3>{program.programName}</h3>
                <p><strong>Organization:</strong> {program.organization}</p>
                <p>{program.description}</p>
                
                <div className="popup-images">
                  {program.images.map((img, index) => (
                    <img key={index} src={img} alt={`${program.programName} activity`} />
                  ))}
                </div>

                <h4>Goals:</h4>
                <ul>
                  {program.goals.map((goal, index) => <li key={index}>{goal}</li>)}
                </ul>

                <h4>Achievements:</h4>
                <ul>
                  {program.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default MapSection;