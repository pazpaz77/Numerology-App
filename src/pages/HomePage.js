import React from 'react';
import { Container, Image, Jumbotron, Row, Col } from 'react-bootstrap';
import DateForm from '../components/dateForm';
import './HomePagey.css';

class HomePage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        yearSum : 0,
        fullDateSum: "",
        monthSum: 0,
        daySum: 0,
        monthDaySum: "",
        personalYearHeader:"",
        lifePathHeader:"",
      };

    }
  
    
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
        personalYearHeader: "Your Personal Year number is  ",
        fullDateSum: newSumFull,
        lifePathHeader: "You Life path number is "
    });
        
    }

    render() {
        //year forecast text 1-9

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

        //life path text 1-9
         
         let lifePathText = "";

         if (this.state.fullDateSum == 1) {
          lifePathText = this.props.lifePathData[0].lptext;
         }
          else if (this.state.fullDateSum == 2) {
             lifePathText = this.props.lifePathData[1].lptext;
          }
          else if (this.state.fullDateSum == 3) {
             lifePathText = this.props.lifePathData[2].lptext;
          }
          else if (this.state.fullDateSum == 4) {
             lifePathText = this.props.lifePathData[3].lptext;
          }
          else if (this.state.fullDateSum == 5) {
             lifePathText = this.props.lifePathData[4].lptext;
          }
          else if (this.state.fullDateSum == 6) {
             lifePathText = this.props.lifePathData[5].lptext;
          }
          else if (this.state.fullDateSum == 7) {
             lifePathText = this.props.lifePathData[6].lptext;
          }
          else if (this.state.fullDateSum == 8) {
             lifePathText = this.props.lifePathData[7].lptext;
          }
 
          else if (this.state.fullDateSum == 9) {
             lifePathText = this.props.lifePathData[8].lptext;
          } 
         
        

    
        return (
            // className="c-home-page"
            <div>
                <Container fluid className="c-home-page">
                <Row className="row-center">
                   <p className="p-home-first">Have you heard of Numerology? Do you always see the same number throughout your life? Have you found yourself drawn to particular numbers? In simple terms, numerology is a study of numbers in your life. You can uncover information about the world and also each individual person by using Numerology. Numerology is seen as a universal language of numbers.</p>
                    <Col xs={12} md={4}>
                        <Image className ="center" src="https://i.pinimg.com/originals/95/c9/e7/95c9e744532f152301176be9f3d677ff.jpg" />
                    </Col>
                    
                    <Col xs={12} md={8}>
                    
                        <Jumbotron> 
                           <h2>FIND YOUR PERSONAL NUMBERS</h2> 
                           <h4>Enter your birth date and find your life path number and your Year forecast  numbers.</h4>
                        
                           <DateForm 
                            sumDateDigits={this.sumDateDigits} yearForcast={this.forecastText}/>

                        </Jumbotron>

                        
   
                    </Col>
                </Row>
                
                </Container>
                <div>
                <Row className="yellow-col">
                     {/* <Col xs={12} md={6} className="yellow-col"> */}
                     <h5 className="h5-home">{this.state.lifePathHeader} {this.state.fullDateSum}</h5>
                    <p>{lifePathText}</p>
                     {/* </Col> */}

                     {/* <Col xs={12} md={6} className="yellow-col">
                     <h5>{this.state.personalYearHeader} {this.state.monthDaySum} </h5>
                     <p>{forecastText}</p>
                     </Col> */}

                </Row>
                
                </div>
            </div>
        )
    }
}
export default HomePage;


{/* <h2><span style={{color:"green"}}>FIND </span>YOUR <span style={{color:"#e74f4f"}}>PERSONAL</span> <span style={{color:"#358fdc"}}>NUMBERS</span></h2>  */}
{/* <h2><span style={{color:"#dc354c"}}>FIND </span>YOUR <span style={{color:"#dc354c"}}>P</span>ERSONAL <span style={{color:"#dc354c"}}>N</span>UMBERS</h2>  */}

