import React from 'react'
import "../Global.css";
import OwlCarousel from 'react-owl-carousel';

const Testimonial = () => {
  return (
    <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="customers-testimonials" className="owl-carousel">
                {/*TESTIMONIAL 1 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                  </div>
                  <div className="testimonial-name">EMILIANO AQUILANI</div>
                </div>
                {/*END OF TESTIMONIAL 1 */}
                {/*TESTIMONIAL 2 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                  </div>
                  <div className="testimonial-name">ANNA ITURBE</div>
                </div>
                {/*END OF TESTIMONIAL 2 */}
                {/*TESTIMONIAL 3 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                  </div>
                  <div className="testimonial-name">LARA ATKINSON</div>
                </div>
                {/*END OF TESTIMONIAL 3 */}
                {/*TESTIMONIAL 4 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                  </div>
                  <div className="testimonial-name">IAN OWEN</div>
                </div>
                {/*END OF TESTIMONIAL 4 */}
                {/*TESTIMONIAL 5 */}
                <div className="item">
                  <div className="shadow-effect">
                    <img className="img-circle" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt="" />
                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                  </div>
                  <div className="testimonial-name">MICHAEL TEDDY</div>
                </div>
                {/*END OF TESTIMONIAL 5 */}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial