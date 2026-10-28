import React from 'react';
import { RouterProvider, useRouter } from './router/RouterContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileDrawer from './components/layout/MobileDrawer';

import HomeScreen from './screens/HomeScreen';
import WorkScreen from './screens/WorkScreen';
import CaseStudyScreen from './screens/CaseStudyScreen';
import ImpactScreen from './screens/ImpactScreen';
import ProposalScreen from './screens/ProposalScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function ScreenRenderer() {
  const { currentPath } = useRouter();

  switch (currentPath) {
    case '/':
    case '/home':
      return <HomeScreen />;
    case '/work':
      return <WorkScreen />;
    case '/case-study':
      return <CaseStudyScreen />;
    case '/impact':
      return <ImpactScreen />;
    case '/proposal':
      return <ProposalScreen />;
    case '/confirmed':
      return <ConfirmationScreen />;
    default:
      return <NotFoundScreen />;
  }
}

function MainLayout() {
  const { currentPath } = useRouter();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--surface)' }}>
      <Navbar />
      <MobileDrawer />
      <div key={currentPath} className="view-transition-in" style={{ flex: 1 }}>
        <ScreenRenderer />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainLayout />
    </RouterProvider>
  );
}

