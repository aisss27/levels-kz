import { Dashboard } from '../../components/Dashboard/Dashboard';
import { HomeInfo } from '../../components/HomeInfo/HomeInfo.tsx';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller.tsx';
import { useEffect } from 'react';
import { getCompaniesList } from '../../store/slices/companiesListSlice.ts';
import { AppDispatch } from '../../store/store.ts';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompaniesList());
  }, []);

  return (
    <>
      <HomeInfo />
      <Dashboard />
      <InfiniteScroller />
    </>
  );
};
