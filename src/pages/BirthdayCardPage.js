import React from 'react';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import './BirthdayCardPage.css'

class BirthdayCardPage extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        dayValue: 1,
        monthValue: 1,
        monthDaySum: "",
        cardHeaderText:"",
        greetingText:"",
        cardForecastHeader:"",
        modalShow: false,
    
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

    newCardHeader = (event) => {
        this.setState({ 
            cardHeaderText: event.target.value});
    }

    newGreetingText = (event) => {
        this.setState({ 
            greetingText: event.target.value});
    }

    createCard = (month, day) => {
        
        let monthValue = parseInt(month);
        let dayValue = parseInt(day);
        let monthDayValue = monthValue + dayValue;

        // day + month digits
        let sumDM = 0;

        
        while (monthDayValue > 0) {
            sumDM += monthDayValue % 10;
            monthDayValue = Math.floor(monthDayValue / 10);
        }

        this.setState({ 
        
        monthDaySum: sumDM,
        headerText: "Your Personal Year number is  ",
        cardForecastHeader: "Your numerology forecast for the upcoming year",
        modalShow: true,
       
    });
    }

    showModal = () => {
        this.setState({ modalShow: true });
      };
    
    hideModal = () => {
        this.setState({ modalShow: false });
      };
   
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
        

        return (
                <div className="c-home-forecast-page">
                <Container>
                        <Row>
                <Col xs={12} md={8} className="yellow-col-card">
                <h5 className="card-page-header">CREATE PERSONALIZED BIRTHDAY CARDS</h5>
                <p>Create personalized birthday cards for your friend or loved one with a personalized yearly numerology forecast Your friends, family or loved one will cherish this unique birthday cards. add personalized greeting text and enter the person birth date to get the yearly birthday forecast.  </p>
                <Form>
                    <h6 className="card-h6">Enter person date of birth</h6>
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
            
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add card header text</Form.Label>
                                <Form.Control type = "text"
                                        defaultValue={this.state.cardHeaderText}
                                        onChange={this.newCardHeader} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add personal Birthday text</Form.Label>
                                <Form.Control as="textarea" rows={3}  
                                        defaultValue={this.state.greetingText}
                                        onChange={this.newGreetingText} />
                            </Form.Group>
                        </Form.Row>

                    <Button 
                        onClick= {() => this.createCard(this.state.monthValue,this.state.dayValue)}  
                        variant="dark" 
                        type="button">
                        Creat Card
                    </Button>
                    
                    
                    </Form>

                    </Col>   
                    <Col xs={12} md={4}>
                        <Image className ="img-card" src="https://i.pinimg.com/originals/95/c9/e7/95c9e744532f152301176be9f3d677ff.jpg" />
                    </Col>
                    </Row>
                    <Modal show={this.state.modalShow} onHide={this.hideModal}>
                    {/* <Modal.Dialog> */}
                    {/* <div className ="bd-card"> */}
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.cardHeaderText}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>{this.state.greetingText}</p>
                            <h5>{this.state.cardForecastHeader}</h5>
                            <p>{forecastText}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.hideModal}>
                                Close
                            </Button>
         
                        </Modal.Footer>
                         {/* </div> */}
                    {/* </Modal.Dialog> */}
                    </Modal>
                    </Container>
                </div>
        )
    }
}
export default BirthdayCardPage;