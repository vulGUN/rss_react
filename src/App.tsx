import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import PersonDetails from '@/components/PersonDetails/PersonDetails';
import { useData } from '@/contexts/DataProvider';

export default function App() {
  const { page } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/page/${page}`);
  }, []);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/page/:pageNumber" element={<PersonListSection />}>
            <Route path="/page/:pageNumber/details/:personId" element={<PersonDetails />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
