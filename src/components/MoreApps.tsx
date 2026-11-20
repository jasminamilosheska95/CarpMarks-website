// "More by CarpMarks Team": cross-promotes our other apps. Every store link is
// tagged (ct=carpmarks-website) so installs from this site show up in
// App Store Connect → Analytics → Acquisition → Campaigns for each app.

const APP_STORE_PROVIDER_TOKEN = '128825962';
const CAMPAIGN = 'carpmarks-website';

function appStoreUrl(appId: string): string {
  return `https://apps.apple.com/app/apple-store/id${appId}?pt=${APP_STORE_PROVIDER_TOKEN}&ct=${CAMPAIGN}&mt=8`;
}

type OtherApp = {
  name: string;
  description: string;
  icon: string;
  website?: string;
  // null until the app's App Store ID is known; cards without one are hidden.
  appStoreId: string | null;
};

const OTHER_APPS: OtherApp[] = [
  {
    name: 'Mozi',
    description: 'Private period and cycle tracker. Log your period, follow your phases and see your fertile window.',
    icon: '/more-apps/mozi.png',
    website: 'https://mozicycle.com',
    appStoreId: '6764005323',
  },
  {
    name: 'Season',
    description: 'Season, daylight and moon tracker for iPhone, with home screen widgets.',
    icon: '/more-apps/season.png',
    appStoreId: '6829498708',
  },
];

export default function MoreApps() {
  const apps = OTHER_APPS.filter((app) => app.appStoreId);
  if (apps.length === 0) return null;

  return (
    <div className="mb-12 pb-12 border-b border-white/10">
      <h3 className="font-semibold mb-5 text-[#D4A574] uppercase text-[10px] tracking-widest">
        More by CarpMarks Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {apps.map((app) => (
          <div
            key={app.name}
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4"
          >
            <img
              src={app.icon}
              alt={`${app.name} app icon`}
              width={56}
              height={56}
              loading="lazy"
              className="w-14 h-14 rounded-xl shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-white">
                {app.website ? (
                  <a href={app.website} target="_blank" rel="noopener" className="hover:text-[#D4A574] transition-colors">
                    {app.name}
                  </a>
                ) : (
                  app.name
                )}
              </p>
              <p className="text-white/55 text-xs leading-relaxed mt-0.5">{app.description}</p>
            </div>
            <a
              href={appStoreUrl(app.appStoreId!)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${app.name} on the App Store`}
              className="shrink-0 inline-flex items-center gap-1.5 bg-white text-[#0A4D68] text-xs font-bold px-3.5 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25zM17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.32.85 3.12.87 1.2-.24 2.34-1.03 3.63-.89 1.58.19 2.77.89 3.54 2.26-3.25 1.95-2.73 5.96.41 7.36-.57 1.28-1.31 2.54-2.7 3.28z" />
              </svg>
              App Store
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
