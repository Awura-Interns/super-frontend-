// import React from 'react'
// import "../Assets/styles/cart.css"
// import {Link}from'react-router-dom'


// export default function Cart() {
//   return (
//   <>
  
//   <div className="wrapper1">
//         <div className="navbar">
//             <div className="logo">
//                 <Link to="#">Super_link</Link>
//             </div>

// 			<div action="" className="search">
//                 <input type="search" name="" placeholder="search here..." id="search-box"/>
//                 <label htmlFor="search-box" className="fas fa-search"></label>
//             </div>
//             <div className="nav_right">
//                 <ul>
//                     <li className="nr_li">
//                         <i className="fas fa-shopping-cart"></i>
//                     </li>
//                     <li className="nr_li">
//                         <i className="fas fa-envelope-open-text"></i>
//                     </li>

//                     <li className="nr_li dd_main">
//                         <img src="/spuer_image/profile.jpg" alt="profile_img"/>
                        
//                         <div className="dd_menu">
                            
//                             <div className="dd_right">
//                                 <ul>
//                                     <li><i className="fas fa-map-marker-alt"></i>your order</li>
//                                     <li><i className="far fa-star"></i>your payment</li>
                                    
//                                     <li><i className="fas fa-cog"></i>your profiles</li>
//                                     <li><i className="fas fa-download"></i>your list </li>
//                                     <li><i className="fas fa-sign-out-alt"></i>Logout</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </li>
                    
//                 </ul>
//             </div>
//         </div>
//     </div>	







// <div className="wrapper">
// 	<div className="links">
// 		<ul>
// 			<li data-view="list-view" className="li-list active">
// 			<i className="fas fa-th-list"></i>
// 			cart list</li>
// 			<li data-view="grid-view" className="li-grid">/
// 			<i className="fas fa-th-large"></i>
// 			show preview</li>
// 		</ul>
// 	</div>
// 	<div className="view_main">
// 		<div className="view_wrap list-view" style={{display:'18rem',}}>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/1_09a8a5da-363c-4fe1-8bdc-6d1fc5484a5f_large.webp" alt="tomato"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
					
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/1_b1f0793e-6bb7-483b-a73c-226d21b184f6_large.webp" alt="chilli"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
					
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/2018_1022_10211500-2-1.jpg" alt="carrot"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
					
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/wild-coffee-extinction.webp" alt="onion"/>
// 				</div>
// 				<div className="vi_right">
// 				<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
					
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/3812.webp" alt="potato"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
					
// 				</div>
// 			</div>
// 		</div>
// 		<div className="view_wrap grid-view" >
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="spuer_image/2018_1022_10211500-2-1.jpg" alt="apple"/>
// 				</div>
// 				<div className="vi_right">
// 				<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
// 					{/* <!-- <button type="submit" className="fas fa-times" name="delete" onclick="return confirm('delete this item?');"></button> --> */}
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/benefits-of-carrots1575626304.jpg" alt="banana"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
// 					{/* <!-- <button type="submit" className="fas fa-times" name="delete" onclick="return confirm('delete this item?');"></button> --> */}
// 				</div>
// 			</div>
// 			<div className="view_item">
// 				<div className="vi_left">
// 					<img src="/spuer_image/chandramukhi-potato-500x500.jpg" alt="grapes"/>
// 				</div>
// 				<div className="vi_right">
// 					<p className="title">name:</p>
// 					<p className="content">amount:</p>
// 					<p className="content">total:birr</p>
					
// 					<button type="submit" className="fas fa-edit" name="update_qty"></button>
// 					<button type="submit" className="fas fa-times" name="update_qty"></button>
// 					{/* <!-- <button type="submit" className="fas fa-times" name="delete" onclick="return confirm('delete this item?');"></button> --> */}
// 				</div>
// 			</div>
			
// 		</div>
// 	</div>
// </div>
	
// <script src="./script/cart.js"></script>


// </>

    
// );
// }
