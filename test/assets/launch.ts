import { Launch } from '../../src/app/models/launch';

export const LAUNCH: Launch = {
  id: '9999',
  slug: 'slug',
  name: 'TestName',
  net: new Date(),
  status: { name: 'status' },
  pad: { name: '', location: { name: 'location' } },
};
