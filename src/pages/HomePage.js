import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import DateForm from '../components/dateForm';
import './HomePagey.css';

class HomePage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        yearSum : 0,
        fullDateSum: 0,
        monthSum: 0,
        daySum: 0,
        monthDaySum: "",
        headerText:"",
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
        let sumDM = 5;

        // debugger
        while (monthDayValue > 10) {
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
        headerText: "Your Personal Year number is  "
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
         
         
        

    
        return (
            <div c-home-page>
                {/* <div className="">Homepage</div> */}
                <Jumbotron><h4>Find your Personal Year number</h4>
                
                <DateForm 
                    sumDateDigits={this.sumDateDigits} yearForcast={this.forecastText}/>

                </Jumbotron>

                <h5>{this.state.headerText} {this.state.monthDaySum} </h5>
                <p>{forecastText}</p>
                {/* <div>sum year digits {this.state.yearSum}, <br> 
                </br>sum month+day digits {this.state.monthDaySum} 666 {forecastText}</div> */}
                <p></p>
                <div></div>
            </div>
        )
    }
}
export default HomePage;