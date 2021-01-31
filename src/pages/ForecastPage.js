import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

class ForecastPage extends React.Component {
    constructor(props) {
    super(props);
    }
    
    render() {
        return (
                <div className="c-home-forecast-page">Forecast Page
                
                <Tabs defaultActiveKey="day" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                        test ddddddddddddala
                           
                        </Tab>
                        <Tab eventKey="day" title="Profile">
                        test llllalalala
                           
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                        test llllalalala
                           
                        </Tab>
                        </Tabs>
                </div>
        )
    }
}
export default ForecastPage;