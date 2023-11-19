import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import PersonDetails from '@/components/PersonDetails/PersonDetails';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/Store';
import Page404 from '@/components/Page404/Page404';

export default function App() {
  const { page } = useSelector((state: RootState) => state.data);
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
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}
