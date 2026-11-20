export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.jasminamilosheska.carpmarks';

// App Store Connect campaign tracking: installs per `ct` show under
// Analytics → Acquisition → Campaigns.
const APP_STORE_PROVIDER_TOKEN = '128825962';

export type StorePlacement =
  | 'home-hero'
  | 'home-footer'
  | 'download-hero'
  | 'download-footer';

export function appStoreCampaignUrl(placement: StorePlacement): string {
  return `https://apps.apple.com/app/apple-store/id6763633214?pt=${APP_STORE_PROVIDER_TOKEN}&ct=${placement}&mt=8`;
}

// Google Play install referrer: installs per placement show in Play Console
// under Grow → Store performance → Store listing acquisition (UTM campaigns).
export function playStoreCampaignUrl(placement: StorePlacement): string {
  const referrer = encodeURIComponent(
    `utm_source=carpmarks-website&utm_medium=website&utm_campaign=${placement}`
  );
  return `${PLAY_STORE_URL}&referrer=${referrer}`;
}
