import { Container, Carousel } from "react-bootstrap";
import image1 from './images/testimonials/testimonials-1.jpg'
import image2 from './images/testimonials/testimonials-2.jpg'
import image3 from './images/testimonials/testimonials-3.jpg'
import image4 from './images/testimonials/testimonials-4.jpg'
import image5 from './images/testimonials/testimonials-5.jpg'



export function Testimonies(){
    
    return(
        <section id="testimonials" className="testimonials">
            <Container>
                <Carousel>
                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">   
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src={image1} className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                                <p>
                                    <i className="fa-solid fa-quote-left quote-icon-left"></i>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <i className="fa-solid fa-quote-right quote-icon-right"></i>
                                </p>
                                </div>
                            </div>
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src={image2} className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                                <p>
                                    <i className="fa-solid fa-quote-left quote-icon-left"></i>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <i className="fa-solid fa-quote-right quote-icon-right"></i>
                                </p>
                                </div>
                            </div>  
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src={image3} className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                                <p>
                                    <i className="fa-solid fa-quote-left quote-icon-left"></i>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    <i className="fa-solid fa-quote-right quote-icon-right"></i>
                                </p>
                                </div>
                            </div>                    
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                <img src={image4} className="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                                <p>
                                    <i className="fa-solid fa-quote-left quote-icon-left"></i>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    <i className="fa-solid fa-quote-right quote-icon-right"></i>
                                </p>
                                </div>
                            </div>                        
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img src={image5} className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <p>
                                        <i className="fa-solid fa-quote-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="fa-solid fa-quote-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </Container>
    </section>
    )
}