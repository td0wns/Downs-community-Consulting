import type { Metadata } from 'next';

export { default } from '../page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.downscommunityconsulting.co.uk/',
  },
  robots: {
    index: false,
    follow: true,
  },
};
