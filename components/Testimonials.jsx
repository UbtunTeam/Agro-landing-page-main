import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="abouttitle testtitle">Testimonials</h1>
      <div className="testimonialflex">
        <div className="testimonialimg">
          <img
            src="data:image/jpeg;base64,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"
            alt="farmer"
          />
        </div>
        <div className="testinfos">
          <div className="name">Ajibade Olusayo Joshua</div>
          <div className="testimonialinfo">Yam farmer</div>
          <div className="testimonialinfo">Ibadan Nigeria</div>
          <div className="marg marginfo">
            &quot;An app that create ease for me and I love the fact that
            everything
          </div>
          <div className="marginfo">
            happening on it is in he control of the user and I can effectively
            carry
          </div>
          <div className="marginfo">out my business&quot;</div>
        </div>
        <img src="/icons/CaretRight.svg" alt="" className="arrow" />
      </div>
      <div className="pag">
        <div className="pagflex">
          <div className="circle first"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="bigcircle"></div>
    </div>
  );
};

export default Testimonials;