import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPageView } from '../analytics/ga4';
import { getDeviceType, getPageTemplate } from '../utils/pageTemplate';

export default function RouteAnalytics() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    // send page_view on navigation
    sendPageView(pathname + (search || ''), document.title, {
      page_template: getPageTemplate(pathname),
      device_type: getDeviceType(),
    });
  }, [pathname, search]);
  return null;
}

