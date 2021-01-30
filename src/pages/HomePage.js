import React from 'react';
import { Container, Image, Jumbotron, Row, Col } from 'react-bootstrap';
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
        personalYearHeader:"",
        lifePathHeader:"",
      };

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

        // *** sum day + month digits *** //

        let sumDM = 5; 
        let digit = 0;
        while (monthDayValue) {
        digit = monthDayValue % 10;
        sumDM += digit;
        monthDayValue = (monthDayValue - digit) / 10;
        }
        let newSumDM = sumDM;
        if (newSumDM >= 10) {
            newSumDM = newSumDM % 9;
        }
        
        
        // *** sum year digits *** //

        let yearValue = parseInt(year);
        let sumY = 0;
        let digitY = 0;
        while (yearValue) {
            digitY = yearValue % 10;
            sumY += digitY;
            yearValue = (yearValue - digitY) / 10;
        }
        let newSumY = sumY;
        if (newSumY >= 10) {
            newSumY = newSumY % 9;
        }

        // *** sum full date digits *** //
        let sumFull = newSumY + newSumY;
        let digitFull = 0;
        while (sumFull) {
            digitFull = sumFull % 10;
            sumFull += digitFull;
            sumFull = (sumFull - digitFull) / 10;
        }

        let newSumFull = sumFull;
        if (newSumFull >= 10) {
            newSumFull = newSumFull % 9;
        }

        

        this.setState({ 
        yearSum: newSumY,
        monthDaySum: newSumY,
        personalYearHeader: "Your Personal Year number is  ",
        fullDateSum: newSumFull,
        lifePathHeader: "You life pat number is "
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
            // className="c-home-page"
            <div>
                <Container fluid className="c-home-page">
                <Row>
                    <Col xs={12} md={4}>
                        <Image className ="center" src="https://i.pinimg.com/originals/95/c9/e7/95c9e744532f152301176be9f3d677ff.jpg" />
                    </Col>
                    
                    <Col xs={12} md={8}>
                    
                        <Jumbotron><h4>Find your Personal Year number</h4>
                        
                        <DateForm 
                            sumDateDigits={this.sumDateDigits} yearForcast={this.forecastText}/>

                        </Jumbotron>

                        
                        {/* <div>sum year digits {this.state.yearSum}, <br> 
                        </br>sum month+day digits {this.state.monthDaySum} 666 {forecastText}</div> */}
                    </Col>
                </Row>
                
                </Container>
                <div className="row-full-width">
                <Row className="home-row2">
                    {/* <h3>sum year digits: {this.state.yearSum}</h3><br></br> */}
                     <h5>{this.state.personalYearHeader} {this.state.monthDaySum} </h5>
                     <p>{forecastText}</p>

                </Row>
                </div>
            </div>
        )
    }
}
export default HomePage;




                // נוסחא קודמת

                // let sumDM = 5;
                // while (monthDayValue > 0) {
                //     sumDM += monthDayValue % 10;
                //     monthDayValue = Math.floor(monthDayValue / 10);
                // }