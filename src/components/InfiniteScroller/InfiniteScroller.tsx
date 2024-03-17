import React from 'react';
import Card from './Card';
import './style.css'
import logo1 from './logos/macys.svg'
import logo2 from './logos/menshealth.svg'
import logo3 from './logos/mrbeast.svg'
/* interface Company {
    id: number; 
    company: string;
    logo: string;
} */

const companiesArray = [
    {id: 1, company: "Hello", logo: logo1},
    {id: 2, company: "Hello1", logo: logo2},
    {id: 3, company: "Hello2", logo: logo3},
]


const InfiniteScroller: React.FC = () => {
  /*   const [companies, setCompanies] = useState([companiesArray]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
 */
   
   /*  const fetchData = async () => {
        setIsLoading(true);
        setError(null); 
        try {
            const response = await fetch('https://your-api-endpoint.com/companies');
            const data: Company[] = await response.json();
            setCompanies([...companies, ...data]); 
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('Failed to load companies.');
        } finally {
            setIsLoading(false);
        }
    }; */

   /*  useEffect(() => {
        fetchData();
    },);
 */
    return (
        <div className="logos">
            {/* {error ? (
                <p className="error">{error}</p>
            ) : isLoading ? (
                <p className="loading">Loading...</p>
            ) : ( */}
                <div className="logos-slide">
                    {companiesArray.map((company) => (
                        <Card key={company.id} company={company.company} logo={company.logo} />
                    ))}
                </div>
           {/*  )} */}
        </div>
    );
};

export default InfiniteScroller;
