// src/mapData.js

// Import your images
import parambupattiImg1 from './assets/images/img1.jpg';
import parambupattiImg2 from './assets/images/img2.jpg';
import anotherProgramImg1 from './assets/images/img3.jpg';

export const programData = [
  {
    id: 1,
    position: [9.5893, 77.9830], // Latitude & Longitude for Parambupatti
    organization: 'ASF',
    programName: 'Parambupatti Village Awareness Program',
    description: 'A comprehensive program focused on health, hygiene, and sustainable farming practices for the residents of Parambupatti.',
    goals: [
      'Improve sanitation standards by 80%',
      'Educate 100+ families on organic farming',
      'Conduct health check-up camps for all age groups'
    ],
    achievements: [
      'Successfully installed 5 community water filters.',
      'Distributed 500+ hygiene kits.',
      'Saw a 40% reduction in waterborne illnesses in 6 months.'
    ],
    images: [parambupattiImg1, parambupattiImg2]
  },
  {
    id: 2,
    position: [11.6643, 78.1460], // Latitude & Longitude for Salem
    organization: 'YECO',
    programName: 'Salem Urban Greening Project',
    description: 'Aimed at increasing the green cover in urban areas of Salem by planting native tree species.',
    goals: [
      'Plant 1,000 saplings in public spaces',
      'Engage 50 local schools in the initiative',
      'Create 3 new community parks'
    ],
    achievements: [
      'Planted over 1,500 saplings.',
      'Hosted environmental workshops for 2,000+ students.',
      'Transformed a barren plot into a vibrant biodiversity park.'
    ],
    images: [anotherProgramImg1]
  }
  // ...add more program objects here
];