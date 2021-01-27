import React from 'react';
import DateForm from '../components/dateForm';

class HomePage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        yearSum : 0,
        fullDateSum: 0,
        monthSum: 0,
        daySum: 0,
        monthDaySum: 0,
      };

      this.fullDateDigits=this.fullDateDigits.bind(this);
    }
    
    handleDate(year, month, day) {
       
            return (month);
    }

    fullDateDigits(year, month, day) {
        
        let sum = parseInt(month);
        // console.log (sum);
        this.setState({ 
            monthDaySum: sum + 3});
    }


    sumYearDigits = (year) => {
        let value = parseInt(year);
        let sum = 0;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        
        this.setState({ 
        yearSum: sum});
        
    }

    render() {
        return (
            <div>
                <div className="c-home-page">Homepage</div>
                <DateForm 
                    handleDate={this.handleDate} 
                    sumYearDigits={this.sumYearDigits}/>
                <div>test sum month day {this.handleDate}</div>
            </div>
        )
    }
}
export default HomePage;