//Import the Footer component
import Footer from './Footer';

//Create the Contacts component
function Contacts() {
    return (
        <div id='container'>
            <h1 className='page-heading'>Contact Us</h1>
            <ul>
                <li>Email us: <a href="guardwire1@gmail.com">guardwire1@gmail.com</a></li>
                <li>Phone: <a href="tel:+254780764378">0780764378</a></li>
            </ul>
        </div>
    );
}

export default Contacts;