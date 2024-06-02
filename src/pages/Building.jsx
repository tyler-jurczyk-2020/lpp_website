import Card from "../components/Card";

function Building({ address, thumbnails }) {
    
    return(
        <div>
            <p>{address}</p>
            <div className="Floors">
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[0]} target="/ashland/firstfloor" 
                      title="First Floor Duplex 2 Bed 1 Bath" description="It will cost your kidney to live here"/>
                </div>
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[1]} target="/ashland/secondfloor"
                      title="Second Floor 2 Bed 1 Bath" description="Party central"/>
                </div>
                <div className="FloorsCards">
                <Card cardClass="Ashland" image={thumbnails[2]} target="/ashland/thirdfloor"
                      title="Third Floor 2 Bed 1 Bath" description="Dishwasher is crashing out hard"/>
                </div>
            </div>
        </div>
    );
}

export default Building
