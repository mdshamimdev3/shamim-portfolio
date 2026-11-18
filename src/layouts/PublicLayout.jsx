import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SmoothScroll from '../components/SmoothScroll';

function PageFallback() {
  return (
    <div className="wrap flex min-h-[70svh] flex-col justify-center gap-4 pt-24" role="status" aria-label="Loading page">
      <div className="h-10 w-2/3 animate-pulse rounded-md bg-line" />
      <div className="h-10 w-1/2 animate-pulse rounded-md bg-line" />
      <div className="mt-4 h-4 w-80 max-w-full animate-pulse rounded-md bg-line" />
    </div>
  );
}

export default function PublicLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-svh flex-col">
      <SmoothScroll />
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" key={pathname} className="page-enter flex-1">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
