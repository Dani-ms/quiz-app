import { Button, Form } from "react-bootstrap";






export default function Quiz() {
    return (
        <>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Write this Name"  className="my-3"/>
                <Form.Select aria-label="Default select Job position" className="my-3">
                    <option>Job position</option>
                    <option value="1">Design</option>
                    <option value="2">Frontend Developer</option>
                    
                </Form.Select>
                <Button variant="primary" type="submit">
                    Next
                </Button>
            </Form>
        </>
    )
}