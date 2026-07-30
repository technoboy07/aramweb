import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { programData } from './mapData';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapSection() {
  const mapCenter = [11.1271, 78.6569];

  return (
    <section id="map" className="map-section">
      <div className="section-header">
        <span className="pill pill-teal-soft">Our Reach</span>
        <h2>Communities we serve</h2>
        <p>Explore the locations where our programmes have made a difference.</p>
      </div>

      <div className="map-frame">
        <MapContainer
          center={mapCenter}
          zoom={7}
          className="reach-map"
          style={{ height: '560px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {programData.map((program) => (
            <Marker key={program.id} position={program.position}>
              <Popup>
                <div className="popup-content">
                  <h3>{program.programName}</h3>
                  <p>
                    <strong>Organization:</strong> {program.organization}
                  </p>
                  <p>{program.description}</p>

                  <div className="popup-images">
                    {program.images.map((img, index) => (
                      <img key={index} src={img} alt={`${program.programName} activity`} />
                    ))}
                  </div>

                  <h4>Goals:</h4>
                  <ul>
                    {program.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>

                  <h4>Achievements:</h4>
                  <ul>
                    {program.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}

export default MapSection;
