import React from 'react'

export default function Profile() {
  return (
    <>
    <div class="wrapper1">
    <div class="navbar">
        <div class="logo">
            <a href="#">Super_link</a>
        </div>

        <div action="" class="search">
            <input type="search" name="" placeholder="search here..." id="search-box"/>
            <label for="search-box" class="fas fa-search"></label>
        </div>
        <div class="nav_right">
            <ul>
                <li class="nr_li">
                    <li class="fas fa-shopping-cart"></li>
                </li>
                <li class="nr_li">
                    <i class="fas fa-envelope-open-text"></i>
                </li>

                <li class="nr_li dd_main">
                    <img src="/spuer_image/profile.jpg" alt="profile_img"/>
                    
                    <div class="dd_menu">
                        <div class="dd_right">
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i>your order</li>
                                <li><i class="far fa-star"></i>your payment</li>
                                <li><i class="fas fa-cog"></i>your profiles</li>
                                <li><i class="fas fa-download"></i>your list </li>
                                <li><i class="fas fa-sign-out-alt"></i>Logout</li>
                            </ul>
                        </div>
                    </div>
                </li>
                </ul>
        </div>
    </div>
</div>	


<div class="wrapper">
<div class="links">
<ul>
    <li data-view="list-view" class="li-list active">
    Manage your profiles</li>

</ul>
</div>
<div class="view_main">
<div class="view_wrap list-view" style="display: block;">
    <div class="view_item">
        <div class="vi_right">
            <p class="title">bitaniya</p>
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






<script src="./script/cart.js"></script>
</>
  )
}
