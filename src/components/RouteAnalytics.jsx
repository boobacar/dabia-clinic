import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPageView } from '../analytics/ga4';

export default function RouteAnalytics() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    // send page_view on navigation
    sendPageView(pathname + (search || ''), document.title);
  }, [pathname, search]);
  return null;
}

