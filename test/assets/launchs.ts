export const FAVORITE_LAUNCH = {
  id: 'fe91ad95-fd2a-4a13-a7d1-842624ec6be3',
  url: 'https://lldev.thespacedevs.com/2.0.0/launch/fe91ad95-fd2a-4a13-a7d1-842624ec6be3/',
  launch_library_id: null,
  slug: 'falcon-9-block-5-starlink-group-6-29-test',
  name: 'Falcon 9 Block 5 | Starlink Group 6-29-test',
  status: {
    id: 2,
    name: 'TBD',
  },
  net: '2023-11-22T04:00:00Z',
  window_end: '2023-11-22T08:31:00Z',
  window_start: '2023-11-22T04:00:00Z',
  lsp_name: 'SpaceX',
  mission: 'Starlink Group 6-29',
  mission_type: 'Communications',
  pad: 'Space Launch Complex 40',
  location: 'Cape Canaveral, FL, USA',
  landing: 'ASOG',
  landing_success: 0,
  launcher: 'Unknown F9',
  orbit: 'LEO',
  image:
    'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20230728070724.png',
  infographic: null,
};

export const LAUNCHS = {
  count: 3,
  next: 'https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=10&mode=list&offset=10',
  previous: null,
  results: [
    FAVORITE_LAUNCH,
    {
      id: '8b0d00c6-731a-43c3-a333-3336e6c9f061',
      url: 'https://lldev.thespacedevs.com/2.0.0/launch/8b0d00c6-731a-43c3-a333-3336e6c9f061/',
      launch_library_id: null,
      slug: 'soyuz-21a-bars-m-no-5',
      name: 'Soyuz 2.1a | Bars-M No. 5 (?)',
      status: {
        id: 1,
        name: 'Go',
      },
      net: '2023-11-23T20:00:00Z',
      window_end: '2023-11-23T22:30:00Z',
      window_start: '2023-11-23T20:00:00Z',
      lsp_name: 'Russian Space Forces',
      mission: 'Bars-M No. 5',
      mission_type: 'Government/Top Secret',
      pad: 'Unknown Pad',
      location: 'Plesetsk Cosmodrome, Russian Federation',
      landing: null,
      landing_success: null,
      launcher: null,
      orbit: 'SSO',
      image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/soyuz_2.1a_image_20230805184309.jpg',
      infographic: null,
    },
    {
      id: '2918b5f6-1340-4c73-bb75-4f9b5e16999f',
      url: 'https://lldev.thespacedevs.com/2.0.0/launch/2918b5f6-1340-4c73-bb75-4f9b5e16999f/',
      launch_library_id: null,
      slug: 'electron-the-moon-god-awakens-qps-sar-5',
      name: 'Electron | The Moon God Awakens (QPS-SAR-5)',
      status: {
        id: 1,
        name: 'Go',
      },
      net: '2023-11-28T04:00:00Z',
      window_end: '2023-11-28T06:00:00Z',
      window_start: '2023-11-28T04:00:00Z',
      lsp_name: 'Rocket Lab',
      mission: 'The Moon God Awakens (QPS-SAR-5)',
      mission_type: 'Earth Science',
      pad: 'Unknown Pad',
      location: 'Onenui Station, Mahia Peninsula, New Zealand',
      landing: null,
      landing_success: null,
      launcher: null,
      orbit: 'LEO',
      image:
        'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/electron_image_20190705175640.jpeg',
    },
  ],
};

export const LAUNCHS_FAVORITES = {
  count: 1,
  next: 'https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=10&mode=list&offset=10',
  previous: null,
  results: [FAVORITE_LAUNCH],
};
