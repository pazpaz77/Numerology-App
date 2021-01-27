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

    //   this.fullDateDigits=this.fullDateDigits.bind(this);
    }
    
    
    // fullDateDigits(year, month, day) {
        
    //     let sum = parseInt(month);
    //     // console.log (sum);
    //     this.setState({ 
    //         monthDaySum: sum + 3});
    // }


    sumDateDigits = (year, month, day) => {
        let monthValue = parseInt(month);
        let dayValue = parseInt(day);
        let monthDayValue = monthValue + dayValue;

        // day + month digits
        let sumDM = 0;
        while (monthDayValue) {
            sumDM += monthDayValue % 10;
            monthDayValue = Math.floor(monthDayValue / 10);
        }


        // sum year digits
        let yearValue = parseInt(year);
        let sumY = 0;
        while (yearValue) {
            sumY += yearValue % 10;
            yearValue = Math.floor(yearValue / 10);
        }
        // console.log(this.props.yearForecastData)

        this.setState({ 
        yearSum: sumY,
        monthDaySum: sumDM,
    });
        
    }

    render() {
        //logic if 1-9
        let forecastText = "";
        if (this.state.monthDaySum == 1) {
         forecastText = this.props.yearForecastData[0].pytext;
        }
         else if (this.state.monthDaySum == 2) {
            forecastText = this.props.yearForecastData[1].pytext;
         }
         else if (this.state.monthDaySum == 3) {
            forecastText = this.props.yearForecastData[2].pytext;
         }
         else if (this.state.monthDaySum == 4) {
            forecastText = this.props.yearForecastData[3].pytext;
         }
         else if (this.state.monthDaySum == 5) {
            forecastText = this.props.yearForecastData[4].pytext;
         }
         else if (this.state.monthDaySum == 6) {
            forecastText = this.props.yearForecastData[5].pytext;
         }
         else if (this.state.monthDaySum == 7) {
            forecastText = this.props.yearForecastData[6].pytext;
         }
         else if (this.state.monthDaySum == 8) {
            forecastText = this.props.yearForecastData[7].pytext;
         }
         else if (this.state.monthDaySum == 9) {
            forecastText = this.props.yearForecastData[8].pytext;
         }
         else 
            forecastText = this.props.yearForecastData[9].pytext;
         }
        }
        
    
        return (
            <div>
                <div className="c-home-page">Homepage</div>
                <DateForm 
                   
                    sumDateDigits={this.sumDateDigits}/>
                <div>sum year digits {this.state.yearSum}, <br>
                </br>sum month+day digits {this.state.monthDaySum} 666 {forecastText}</div>
            </div>
        )
    }
}
export default HomePage;