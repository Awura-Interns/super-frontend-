import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/Add.css"
const Add =()=>{
    return(
        



        <body>

        

      
          <div class="home-content">
      
            <div class="sales-boxes">
      
              
              <div class="wrapper">
                <div class="title">
                  Registration movie
                </div>
                <div class="form">
                  <div class="inputfield">
                    <label for="file"> choose an image</label>
                    <input type="file" id="file" accept="image/*" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>item Name</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>producer Name</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>Amount delivered</label>
                    <input type="text" class="input"/>
                  </div>
      
                  <div class="inputfield">
                    <label>Amount of money  </label>
                    <input type="text" class="input"/>
                  </div>
                 
      
                  <div class="inputfield">
                    <label>delivered date</label>
                    <input type="date" class="input"/>
                  </div>
                
      
                  <div class="inputfield">
                    <label>Code</label>
                    <input type="text" class="input"/>
                  </div>
                  <div class="inputfield terms">
                    <label class="check">
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                    </label>
                    <p>Post on the front page</p>
                  </div>
                  <div class="inputfield">
                    <input type="submit" value="submit" class="btn"/>
                  </div>
                </div>
              </div>
      
      
      
      
              <div class="wrapper">
                <div class="title">
                  employee registration
                </div>
                <div class="form">
                  <div class="inputfield">
                    <label for="file"> choose an image</label>
                    <input type="file" id="file" accept="image/*" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>Full Name</label>
                    <input type="text" class="input"/>
                  </div>
      
                  <div class="inputfield">
                    <label>postion</label>
                    <div class="custom_select">
                      <select>
                        <option value="">Select</option>
                        <option value="action">action</option>
                        <option value="main employee">main employee
                        </option>
                        <option value="producer">producer
                        </option>
                        <option value="delivery driver">delivery driver
                        </option>
                        
                      </select>
                    </div>
                  </div>
      
                  <div class="inputfield">
                    <label>registered date</label>
                    <input type="date" class="input"/>
                  </div>
                  <div class="inputfield">
                    <label>description</label>
                    <textarea class="textarea"></textarea>
                  </div>
                  <div class="inputfield">
                    <label>Code</label>
                    <input type="text" class="input"/>
                  </div>
                 
                  <div class="inputfield">
                    <input type="submit" value="submit" class="btn"/>
                  </div>
                </div>
              </div>
      </div>
      
              
            </div>
        
      
        
      
      </body>
    )
}
export default Add;