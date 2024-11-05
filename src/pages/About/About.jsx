import "./about.css"

function About() {
    return (
        <div className="about-container">
            <h1>What do we do?</h1>
            
            <p>Welcome to Arcadia. We are a game rating website created with the singular purpose of informing gamers about popular titles!</p>

            <h2>This app was designed by:</h2>
            <div className="profile-container">
            <div className="profile">
                    <h3>Vicente</h3>
                    <img src="../../images/vicente.png" alt="Vicente" className="profile-image" />
                </div>

                <div className="profile">
                    <h3>Justin</h3>
                    <img src="../../images/justin.png" alt="Justin" className="profile-image" />
                </div>
            </div>
        </div>
    );
}

export default About;