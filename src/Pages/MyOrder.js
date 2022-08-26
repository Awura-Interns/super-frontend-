import React from "react";
import "../Assets/styles/myorder.css"
const MyOrder = () => {
  return (
    <div>
    

      <div className="wrappers">
        <div className="link">
          <ul>
            <li data-view="list-views" className="li-list active">
              <i className="fas fa-th-list"></i>
              cart list
            </li>
            <li data-view="grid-views" className="li-grid"></li>
          </ul>
        </div>
        <div className="view_mains">
          <div className="view_wrap list-views">
            <div className="view_items">
              <div className="vi_left">
                <img
                  src="/spuer_image/1_09a8a5da-363c-4fe1-8bdc-6d1fc5484a5f_large.webp"
                  alt="tomato"
                />
              </div>
              <div className="vi_right">
                <p className="title">name:</p>
                <p className="content">amount:</p>
                <p className="content">total:birr</p>

                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
                <button
                  type="submit"
                  className="fas fa-times"
                  name="update_qty"
                ></button>
              </div>
            </div>
            <div className="view_items">
              <div className="vi_left">
                <img
                  src="/spuer_image/1_b1f0793e-6bb7-483b-a73c-226d21b184f6_large.webp"
                  alt="chilli"
                />
              </div>
              <div className="vi_right">
                <p className="title">name:</p>
                <p className="content">amount:</p>
                <p className="content">total:birr</p>

                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
                <button
                  type="submit"
                  className="fas fa-times"
                  name="update_qty"
                ></button>
              </div>
            </div>
            <div className="view_items">
              <div className="vi_left">
                <img
                  src="/spuer_image/2018_1022_10211500-2-1.jpg"
                  alt="carrot"
                />
              </div>
              <div className="vi_right">
                <p className="title">name:</p>
                <p className="content">amount:</p>
                <p className="content">total:birr</p>

                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
                <button
                  type="submit"
                  className="fas fa-times"
                  name="update_qty"
                ></button>
              </div>
            </div>
            <div className="view_items">
              <div className="vi_left">
                <img
                  src="/spuer_image/wild-coffee-extinction.webp"
                  alt="onion"
                />
              </div>
              <div className="vi_right">
                <p className="title">name:</p>
                <p className="content">amount:</p>
                <p className="content">total:birr</p>

                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
                <button
                  type="submit"
                  className="fas fa-times"
                  name="update_qty"
                ></button>
              </div>
            </div>
            <div className="view_items">
              <div className="vi_left">
                <img src="/spuer_image/3812.webp" alt="potato" />
              </div>
              <div className="vi_right">
                <p className="title">name:</p>
                <p className="content">amount:</p>
                <p className="content">total:birr</p>

                <button
                  type="submit"
                  className="fas fa-edit"
                  name="update_qty"
                ></button>
                <button
                  type="submit"
                  className="fas fa-times"
                  name="update_qty"
                ></button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
