import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export function Asked() {
  return (
    <section id='asked' className='py-5'>
        <Container>
            <Row>
                <div className='head-text'>
                    <h1 className='text-center'>Frequently Asked Questions</h1>
                    <div className='barre'>
                        <div className='barre-1'></div>
                    </div>
                    <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Non consectetur a erat nam at lectus urna duis?</Accordion.Header>
                        <Accordion.Body>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet 
                        non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Feugiat scelerisque varius morbi enim nunc?</Accordion.Header>
                        <Accordion.Body>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.
                        Id interdum velit laoreet id donec ultrices.
                        Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                        Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Dolor sit amet consectetur adipiscing elit?</Accordion.Header>
                        <Accordion.Body>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. 
                        Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. 
                        Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                        Urna molestie at elementum eu facilisis sed odio morbi quis
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</Accordion.Header>
                        <Accordion.Body>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. 
                        Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. 
                        Sit amet nisl suscipit adipiscing bibendum est. 
                        Purus gravida quis blandit turpis cursus in.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Tortor vitae purus faucibus ornare. 
                            Varius vel pharetra vel turpis nunc eget lorem dolor?</Accordion.Header>
                        <Accordion.Body>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. 
                        Mauris vitae ultricies leo integer malesuada nunc vel. 
                        Tincidunt eget nullam non nisi est sit amet. 
                        Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    </section>
  );
}