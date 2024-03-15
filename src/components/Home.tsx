import { SearchAppBar } from './header/SearchAppBar.tsx';
import { CompanyInfo } from './CompanyInfo/CompanyInfo.tsx';

export const Home = () => {
  return (
    <div>
      <SearchAppBar />
      <CompanyInfo />
    </div>
  );
};
