import '../buildings.css';
import Card from '../components/Card.jsx'
import AshlandExterior from '/ashland/exterior1.jpg'

function Properties() {
    return(
        <div className="PropertiesGrid">
            <Card cardClass="Ashland" image={AshlandExterior} target="/ashland"
                  title="3810 N Ashland Ave" description="Kendog is always crashing the function at Ashland to leafblow."/>
        </div>
    )
}

export default Properties
