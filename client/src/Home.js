import { Link } from 'react-router-dom';
import Contact from './Contact';


const Home = () => {


    return ( 
        <div>
            <div className="text-blurbs">
                <br/>
                <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
                <h3>A digital tax accounting practice based out of the New York City area</h3>
                <br/>
                <p className="text-blurbs-content-home">
                    Please take a look around the website, you can contact Russell right away by 
                    clicking <Link to="/contact">HERE</Link>.
                    <br/>
                    <br/>
                    Russell is currently accepting new clients. Contact Russell today for a free consultation!
                </p>
            </div>
            <br/>
            <br/>
            <img id="homepage-image" src="homepageimage.jpg" alt="Home Page" />
            <br />
            <br />
            <br />
            <img id="homepage-logo-img" src="homepagelogoimage.png" alt="Home Page Logo" />
            <Contact header={false} homepagelink={false} logo={false} />
        </div>
     );
}
 
export default Home;