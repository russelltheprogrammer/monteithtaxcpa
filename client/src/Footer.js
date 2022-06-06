const Footer = () => {

const currentYear = new Date().getFullYear();

    return ( 
        <div className="footer-container">
            <div className="gradient-container-bottom"></div>
            <i className="fas fa-copyright"></i>Copyright {currentYear} - All Rights Reserved - RUSSELL MONTEITH CPA PLLC
        </div>
     );
}
 
export default Footer;