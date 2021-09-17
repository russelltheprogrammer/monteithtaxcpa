import { Link } from 'react-router-dom';

const Tools = () => {
    return ( 
        <div>
            <div className="topic-header">
                <h1>TOOLS</h1>
            </div>
            <div className="container-tools">
                Stay tuned! This is still in progress!
                <p className="tools-link">
                    Click <Link to="/">here</Link> to go back to the Home Page.
                </p>
            </div>
        </div>
     );
}
 
export default Tools;