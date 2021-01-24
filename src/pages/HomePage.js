import React from 'react';
import DateForm from '../components/dateForm';

class HomePage extends React.Component {
    constructor(props) {
    super(props);
    }
    
    render() {
        return (
            <div>
                <div className="c-home-page">Homepage</div>
                <DateForm/>
            </div>
        )
    }
}
export default HomePage;