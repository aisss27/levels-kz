import { Dashboard } from '../../components/Dashboard/Dashboard';
import { HomeInfo } from '../../components/HomeInfo/HomeInfo.tsx';
import InfiniteScroller from '../../components/InfiniteScroller/InfiniteScroller.tsx';

export const Home = () => {
  return (
    <>
      <HomeInfo />
      <Dashboard />
      <InfiniteScroller />
    </>
  );
};
