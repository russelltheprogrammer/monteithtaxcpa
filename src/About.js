import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="topic-header">
                <h1>ABOUT</h1>
            </div>
            <div className="text-blurbs">
                <h1>Who is Russell Monteith?</h1>
                    <p className="text-blurbs-content">
                    Russell is a Certified Public Accountant licensed in the State of New York. He has over 8 years of experience working as a
                    professional accountant. He graduated from Binghamton University with his Masters in Accounting in the Spring of 2013 and 
                    got his first job soon after. While working toward's his Masters, Russell passed all 4 parts of the CPA test 
                    before graduating. The CPA test is a grueling test with an average pass rate of about 50%. He has experience working in 
                    many different areas of tax from small businesses to large partnerships, from trusts to gift taxes, 
                    from non-profits to corporations, and from small individuals to wealthy individuals. Russell's wide array of experience
                    sets him apart from others in the industry.
                    </p>
                    <br/>
                    <br/>
                <h1>What else can Russell do?</h1> 
                    <p className="text-blurbs-content">
                    Russell is also a front end web developer. He has been learning how to build web applications and websites since
                    2020. He built this entire website all by himself, from scratch. Can Russell help your accounting practice build an internal web application? 
                    Yes, he can. Please see the <Link to="links">links page</Link> to
                    see Russell's GitHub to see the projects that Russell has completed in his spare time.
                    <br/>
                    <br/>
                    A lot of people know how to do taxes and a lot of people know how to program websites but very few can do both.
                    Russell is one of them.
                    </p>
            </div>
        </div>
      );
}
 
export default About;