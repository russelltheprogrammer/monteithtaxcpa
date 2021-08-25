import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="text-blurbs">
            <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
            <p>
                Please take a look around the website, you can contact Russell right away by clicking <Link to="/contact">HERE</Link>.
            </p>

        </div>
     );
}
 
export default Home;