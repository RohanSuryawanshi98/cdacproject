import React from "react";
import './About.css';

function About() {
    return (
        <div><br />

            <div class="profileclass container text-center">
                <img src="../images/About/about1.jpg" class="card-img-top" alt="..." />
                <h3 class="profile">Profile</h3>
                <p class="info">My MedicalShop delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products..</p>
            </div>

            <br />

            <div class="container text-center">
                <p style={{ "text-align": "justify", fontSize: "18px" }}><b>Lucrative offers on our platform allow you to make payment online and via various payment wallets at a discounted price. Alternatively, you can also choose to pay cash on delivery as we deliver the products at your doorstep. We cater to all your pharmaceutical needs and also make ordering medicines online a hassle-free experience for you. We connect you only with registered retail pharmacies & certified diagnostic labs. We ensure that healthcare is affordable to all and make the process of ordering online simple..</b></p>
            </div>

            <br />

            <div class="container text-center">
                <img src="../images/About/about2.jpg" style={{ width: "1100px", height: "400px" }} />
            </div>
            <br />

            <div class="container text-center">
                <p style={{ "text-align": "justify", fontSize: "18px" }}><b>We believe that our key value proposition is our understanding & commitment to adhere to the highest technological standards and that our popularity is a testament to our strong manufacturing capabilities, customer-centricity, and best-in-class sustainable business practices. We are led by a young, enthusiastic and forward looking second generation management, and continue our upward trajectory with a shared vision of delivering both excellence and trust.</b></p>
            </div>

            <br/>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="../images/About/about3.jpg" />
                    </div>
                    <div class="col">
                        <img src="../images/About/about4.jpg" />
                    </div>
                </div>
            </div>




            <br />

        </div>
    );
}

export default About;