import React from 'react'
import img from "../../src/img/cristiano-ronaldo-al-nassr.webp"
import PropTypes from 'prop-types';
import "../App.css"
const profile = ({ fullName, bio, profession }) => {
    const handleName = e => {
        e.preventDefault();
        alert("chaabani majdi")
    };
    return (
        <div>
            <nav>
                <div className='logo'>PortFolio <b>.</b></div>
                <ul className='navItems'>
                    <li><a href="##">Home</a></li>
                    <li><a href="##">Home</a></li>
                    <li><a href="##">Home</a></li>
                    
                    
                    


                </ul>
            

            </nav>
            <div className="divv">
                <div >
                    <p style={{ fontSize: "25px", color: "#0e3746" }}>
                         my name is <span style={{ color: "white", fontWeight: "bold" }}>{fullName}</span> </p>

                    <p style={{ color: "white", fontSize: "25px", color: "#0e3746" }}> I'm
                        <span style={{ marginLeft: "5px", color: "#be2623", fontWeight: "bold" }}>{profession}</span>
                    </p>
                    <p style={{ color:"beige", fontSize: "25px", color: "pinknpm" }}> {bio}</p>
                </div>
                <img src={img} alt="majdi" style={{ width: "300px", height: "300px", marginLeft: "20px" }}
                    onClick={handleName} />
            </div>

        </div >
    )
}

profile.defaultProps = {
    fullName: "name and last name ",
    bio: " ******",
    profession: "nothing "
};
profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default profile