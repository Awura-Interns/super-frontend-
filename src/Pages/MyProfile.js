import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/MyProfile.css"
import "../Assets/js/MyProfile"

export default function MyProfile(){
    return(
    
    <section class="home-section">
       


        <div class="home-content">
            <div class="overview-boxes">
                <div class="wrapper">
                    <div class="links">
                        <ul>
                            <li data-view="list-view" class="li-list active">
                                Manage your profiles</li>

                        </ul>
                    </div>
                    <div class="view_main">
                        <div class="view_wrap list-view" id="view_wrap_list-view">
                            <div class="view_item">
                                <div class="vi_right">
                                    <p class="title">Abyssinia Negede</p>
                                    <p class="content">Account holder</p>

                                    <button type="submit" class="fas fa-edit" name="update_qty"></button>
                                </div>
                            </div>
                            <div class="view_item">

                                <div class="vi_right">
                                    <p class="title">contact Detail</p>
                                    <p class="content">Receive important alerts and information!</p>

                                    <button type="submit" class="fas fa-edit" name="update_qty"></button>
                                </div>
                            </div>
                            <div class="view_item">

                                <div class="vi_right">
                                    <p class="title">Other settings</p>
                                    <p class="content">correct anything you want</p>

                                    <button type="submit" class="fas fa-edit" name="update_qty"></button>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                </div>
                </div>
                </section>
    )
}