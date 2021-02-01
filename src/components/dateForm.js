import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import './dateForm.css' ;

class DateForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        dayValue: 1,
        monthValue: 1,
        yearValue: 2021,
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
    
    submitDate = () => {
        this.props.sumDateDigits(this.state.yearValue,this.state.monthValue, this.state.dayValue);
    }

    

    render() {

        const yearOptions = [];
        for (let i = 2021; i > 1920; i--) {
            const option = <option key = {i} value = {i} >{i}</option>
            yearOptions.push(option)
        }

        const dayOptions = [];
        for (let i = 1; i < 32; i++) {
            const option = <option key = {i} value = {i}> {i}</option>
            dayOptions.push(option)
        }

      

        return (
            <div className="c-date-form">

                <Form>
                    <h6 className="h6-form-home">Enter your date of birth</h6>
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
                            <option value="2">February</option>img-forecast
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

                    {/* {this.props.forecastText}  */}
                    <Button onClick={this.submitDate} variant="outline-warning" type="button">
                        Submit
                    </Button>
                    </Form>
                    {/* <div>{this.submitYear()}</div> */}
                </div>
        )
    }
}
export default DateForm;
