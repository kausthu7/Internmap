import { Startup } from './types';

export const getLogoFilename = (startup: Startup) => {
  if (startup.customLogoUrl) {
    return startup.customLogoUrl;
  }
  const name = startup.slug || startup.id;
  return `/logos/${name}.png`;
};
