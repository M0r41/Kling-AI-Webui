import Script from 'next/script';

import { NEXT_PUBLIC_GOOGLE_ADSENSE_URL } from '@/lib/env';

export default function GoogleAdScript() {
  return <Script async src={NEXT_PUBLIC_GOOGLE_ADSENSE_URL} crossOrigin='anonymous' />;
}
