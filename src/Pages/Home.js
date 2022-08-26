import React, { useState } from "react";
import Model from "../Model";
import "../Assets/styles/home.css";
import img from "../Assets/img/1_09a8a5da-363c-4fe1-8bdc-6d1fc5484a5f_large.webp";
import img1 from "../Assets/img/1_b1f0793e-6bb7-483b-a73c-226d21b184f6_large.webp";
import img2 from "../Assets/img/2018_1022_10211500-2-1.jpg";
import img3 from "../Assets/img/3812.webp";
import img4 from "../Assets/img/74075018.webp";
import img5 from "../Assets/img/AdobeStock_259788715.jpeg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="item-list" id="item-list">
      <div className="box-container">
        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img} alt="" />
          <a link="" className="cat"></a>
          <div className="name"></div>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img2} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img4} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img2} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img} alt="" />
          <a href="" className="cat"></a>
          <div className="name"></div>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img1} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img3} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img5} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>

        <div className="box">
          <div className="name">Name Name </div>
          <button
            onClick={() => setIsOpen(true)}
            type="submit"
            className="fas fa-eye"
            name="add_to_cart"
          ></button>
          <Model open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="image-box">
              <img className="images" src={img1} alt="" />
            </div>
            <div className="word">
              <h3>Product Name:</h3>
              <h3>Describstion:</h3>
              <h3>Amount:</h3>
              <h3>Place of Production:</h3>

              {/* <div className="content">
			         Thank to pop me out of that button,
		        </div> */}
              <button className="button" type="submit">
                add to cart
              </button>
            </div>
          </Model>
          <img src={img1} alt="" />
          <a href="" className="cat"></a>
          <div className="flex">
            <div className="price">
              <span>30 birr</span>
            </div>
            <input
              type="number"
              name="qty"
              className="qty"
              min="1"
              max="99"
              value="1"
              maxlength="2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
