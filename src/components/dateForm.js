import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

class DateForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        idCounter: 1,
        itemList:[] ,
      };

    }
    
    render() {

        const yearOptions = [];
        for (let i = 2022; i > 1900; i--) {
            const option = <option value = {i} >{i}</option>
            yearOptions.push(option)
        }

        const dayOptions = [];
        for (let i = 1; i < 32; i++) {
            const option = <option value = {i}> {i}</option>
            dayOptions.push(option)
        }


        return (
                <div className="c-date-form">

                    <Form>
                        <h5>Enter your date of birth</h5>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity" type="date">
                        <Form.Label>Day</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            {dayOptions}
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Month</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>

                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Year</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            {yearOptions}

                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>

                </div>
        )
    }
}
export default DateForm;