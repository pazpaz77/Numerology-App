import React from 'react';
import { Jumbotron, Tab, Tabs } from 'react-bootstrap';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import './ForecastPage.css'

class ForecastPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            yearSum : 0,
            fullDateSum: "",
            monthSum: 0,
            daySum: 0,
            dayForcastNum: "",
            monthForcastNum :"",
            monthDaySum: "",
            personalYearHeader:"",
            dailyForecastHeader:"",
            monthlyForecastHeader:"",
          };
    
        }
        newDayInput = (event) => {
            this.setState({ 
                dayValue: event.target.value});
        }
        
        newMonthInput = (event) => {
            this.setState({ 
                monthValue: event.target.value});
        }
    
        newYearInput = (event) => {
            this.setState({ 
                yearValue: event.target.value});
        }

        createForecast = (year, month, day) => {
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
            let sumFull = newSumY + newSumDM - 5;
            let sumDate = 0;
            console.log("sumfull = ",sumFull);
            let digitFull = 0;
            while (sumFull) {
                digitFull = sumFull % 10;
                sumDate += digitFull;
                sumFull = (sumFull - digitFull) / 10;
            }
    
            let newSumFull = sumDate;
            if (newSumFull >= 10) {
                newSumFull = newSumFull % 9;
            }

            
    
            //*** SET STATE ***//
    
            this.setState({ 
            yearSum: newSumY,
            monthDaySum: newSumDM,
            dayForcastNum: 4, // fix real
            monthForcastNum : 6, // fix real
            personalYearHeader: "Your Personal Year number is  ",
            fullDateSum: newSumFull,
            dailyForecastHeader: "Your Personal Day number is  ",
            monthlyForecastHeader: "Your Personal Month number is  ",
            
            });
        
        }
    
    render() {

        const yearOptions = [];
        for (let i = 2022; i > 1920; i--) {
            const option = <option key = {i} value = {i} >{i}</option>
            yearOptions.push(option)
        }

        const dayOptions = [];
        for (let i = 1; i < 32; i++) {
            const option = <option key = {i} value = {i}> {i}</option>
            dayOptions.push(option)
        }

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

        // //life path text 1-9
         
        //  let lifePathText = "";

        //  if (this.state.fullDateSum == 1) {
        //   lifePathText = this.props.lifePathData[0].lptext;
        //  }
        //   else if (this.state.fullDateSum == 2) {
        //      lifePathText = this.props.lifePathData[1].lptext;
        //   }
        //   else if (this.state.fullDateSum == 3) {
        //      lifePathText = this.props.lifePathData[2].lptext;
        //   }
        //   else if (this.state.fullDateSum == 4) {
        //      lifePathText = this.props.lifePathData[3].lptext;
        //   }
        //   else if (this.state.fullDateSum == 5) {
        //      lifePathText = this.props.lifePathData[4].lptext;
        //   }
        //   else if (this.state.fullDateSum == 6) {
        //      lifePathText = this.props.lifePathData[5].lptext;
        //   }
        //   else if (this.state.fullDateSum == 7) {
        //      lifePathText = this.props.lifePathData[6].lptext;
        //   }
        //   else if (this.state.fullDateSum == 8) {
        //      lifePathText = this.props.lifePathData[7].lptext;
        //   }
 
        //   else if (this.state.fullDateSum == 9) {
        //      lifePathText = this.props.lifePathData[8].lptext;
        //   } 

        return (
                <div className="c-home-forecast-page">
                <Container>
                <Row className="row-center">
                    
                
                <Col>
                
                <Jumbotron> 
                <h3>Check your personal Daily, Monthly and Yearly Numerology Forecasts</h3>
                <Form>
                    <h6 className="card-h6">Enter your date of birth</h6>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity" type="date">
                        <Form.Label>Day</Form.Label>
                        <Form.Control as="select" 
                                      defaultValue={this.state.dayValue}
                                      onChange={this.newDayInput}>
                            {dayOptions}
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Month</Form.Label>
                        <Form.Control as="select" 
                            defaultValue={this.state.monthValue}
                            onChange={this.newMonthInput}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="1">October</option>
                            <option value="2">November</option>
                            <option value="3">December</option>

                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Year</Form.Label>
                            <Form.Control as="select" 
                                defaultValue={this.state.yearValue}
                                onChange={this.newYearInput}>
                                {yearOptions}

                            </Form.Control>
                        </Form.Group>
                        </Form.Row>
       
                    <Button 
                        onClick= {() => this.createForecast(this.state.yearValue,this.state.monthValue,this.state.dayValue)}  
                        variant="dark" 
                        type="button">
                        Show My Forecast
                    </Button>
                    
                    
                    </Form>
                    </Jumbotron>
                    </Col>
                    
                    <Col>
                        <Image className ="img-forecast" src="https://i.pinimg.com/originals/95/c9/e7/95c9e744532f152301176be9f3d677ff.jpg" />
                    </Col>
                    </Row>
                
                <Tabs defaultActiveKey="year" id="uncontrolled-tab-example">

                        <Tab eventKey="year" title="Yearly Numerology Forecasts">
                        <h5 className="tab-h5-header">{this.state.personalYearHeader}  {this.state.monthDaySum} </h5>
                        <p>{forecastText}</p>
                           
                        </Tab>
                        <Tab eventKey="month" title="Monthly Numerology Forecasts">
                        <h5 className="tab-h5-header">{this.state.monthlyForecastHeader}  {this.state.monthForcastNum} </h5>
                        <p>{forecastText}</p>
                           
                        </Tab>
                       
                        <Tab eventKey="day" title="Daily Numerology Forecasts">
                        <h5 className="tab-h5-header">{this.state.dailyForecastHeader}  {this.state.dayForcastNum} </h5>
                        <p>{forecastText}</p>
                           
                        </Tab>
                </Tabs>
            </Container>
            </div>
        )
    }
}
export default ForecastPage;