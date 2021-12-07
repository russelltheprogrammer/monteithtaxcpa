import { Link } from 'react-router-dom';

const Home = () => {


    return ( 
        <div>
            <div className="text-blurbs">
                <br/>
                <h1>Welcome to RUSSELL MONTEITH CPA PLLC</h1>
                <h4>A digital accounting practice</h4>
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
            <img id="homepage-image" src="homepageimage.jpg" alt="Home Page" />
        </div>
     );
}
 
export default Home;