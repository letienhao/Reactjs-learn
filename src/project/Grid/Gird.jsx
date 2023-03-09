import React from "react";
import "./index.scss";
const Gird = () => {
  return (
    // <div className="layout2">
    //   <div className="layout-item">
    //     <img
    //       src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/ha-giang-vietnam-bucketlistrip0421-47ebe81d7b71491a95a238d3c2349700.jpg"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>
    //   <div className="layout-item">
    //     <img
    //       src="https://atp.vn/wp-content/uploads/2022/01/Travel-Blogger-la-gi.png"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>
    //   <div className="layout-item">
    //     <img
    //       src="https://www.wowweekend.vn/document_root/upload/articles/image/BrowseContent/LifeStyle/202109/Travel%20Blogger/1.jpg"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>{" "}
    //   <div className="layout-item">
    //     <img
    //       src="https://www.wowweekend.vn/document_root/upload/articles/image/BrowseContent/LifeStyle/202109/Travel%20Blogger/1.jpg"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>{" "}
    //   <div className="layout-item">
    //     <img
    //       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5I0U_-gQc3_cZbY6rqwvSpPWIim7DCHFIY_L0wj5a8lchjztkciJBe7dXSw6m8RoEPU&usqp=CAU"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>{" "}
    //   <div className="layout-item">
    //     <img
    //       src="https://cafefcdn.com/thumb_w/650/pr/2021/photo-1-16363658885251653882976-0-0-406-650-crop-1636365929285-63771989771523.jpg"
    //       alt=""
    //       className="layout-image"
    //     />
    //   </div>
    // </div>
    <div className="post-grid">
      <div className="post-item">
        <img
          className="post-image post-image-large"
          src="https://media.vov.vn/sites/default/files/styles/large_watermark/public/2023-03/z4134615882981_11c606f852e80a0edc8163341a068de8.jpg"
          alt=""
        />
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <time className="post-time">Sep 18, 2022</time>
        </div>
      </div>
      <div className="post-item">
        <img
          className="post-image"
          src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/sea_train.jpg"
          alt=""
        />
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <time className="post-time">Sep 18, 2022</time>
        </div>
      </div>
      <div className="post-item">
        <img
          className="post-image"
          src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/geongpo_lake_beach_and_a_tradtional_site.jpg"
          alt=""
        />
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <time className="post-time">Sep 18, 2022</time>
        </div>
      </div>
      <div className="post-item">
        <img
          className="post-image"
          src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/geongpo_lake_beach_and_a_tradtional_site.jpg"
          alt=""
        />
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <time className="post-time">Sep 18, 2022</time>
        </div>
      </div>
      <div className="post-item">
        <img
          className="post-image"
          src="https://media.vov.vn/sites/default/files/styles/large/public/2023-03/gangneung_traditional_house_village.jpg"
          alt=""
        />
        <div className="post-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <time className="post-time">Sep 18, 2022</time>
        </div>
      </div>
    </div>
  );
};

export default Gird;
