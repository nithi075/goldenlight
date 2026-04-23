import React from "react";
import "./Instagram.css";

import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark
} from "react-icons/fa";

/* import images */
import insta1 from "../../assets/instagram/img1.jpg";
import insta2 from "../../assets/instagram/img2.jpg";
import insta3 from "../../assets/instagram/img3.jpg";
import insta4 from "../../assets/instagram/img4.jpg";
import insta5 from "../../assets/instagram/img5.jpg";
import insta6 from "../../assets/instagram/img6.jpg";

const Instagram = () => {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <section className="insta-compact-section">
      
      {/* Header */}
      <div className="insta-header-minimal">
        <span className="insta-mini-tag">
          FOLLOW OUR STORY
        </span>
        <h3>@__jeeva_photography__
</h3>
      </div>

      {/* Grid */}
      <div className="insta-wrapper-small">
        <div className="insta-2-col-grid">
          {images.map((img, i) => (
            <div key={i} className="insta-card-box">
              
              {/* Image */}
              <div className="insta-img-frame">
                <img
                  src={img}
                  alt={`instagram-post-${i}`}
                />
              </div>

              {/* Actions */}
              <div className="insta-card-actions">
                <div className="left-actions">
                  <FaRegHeart className="insta-icon" />
                  <FaRegComment className="insta-icon" />
                </div>

                <div className="right-actions">
                  <FaRegBookmark className="insta-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="insta-footer-link">
        <a
          href="https://www.instagram.com/__jeeva_photography__/"
          target="_blank"
          rel="noreferrer"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Instagram;