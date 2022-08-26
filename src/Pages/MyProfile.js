import React from 'react'
import "../Assets/styles/myprofile.css"


const MyProfile = () => {
  return (
    <div className="wrap">
	<div className="links">
		<ul>
			<li data-view="list-view" className="li-list active">
			Manage your profiles</li>
		
		</ul>
	</div>
	<div className="view_main">
		<div className="view_wrap list-view"  >
			<div className="view_item">
				<div className="vi_right">
					<p className="title">Abyssinia Negede</p>
					<p className="content">Account holder</p>
			
					<button type="submit" className="fas fa-edit" name="update_qty"></button>
				</div>
			</div>
			<div className="view_item">
				
				<div className="vi_right">
					<p className="title">contact Detail</p>
					<p className="content">Receive important alerts and information!</p>

					<button type="submit" className="fas fa-edit" name="update_qty"></button>
				</div>
			</div>
			<div className="view_item">
			
				<div className="vi_right">
					<p className="title">Other settings</p>
					<p className="content">correct anything you want</p>
	
					<button type="submit" className="fas fa-edit" name="update_qty"></button>
				</div>
			</div>
			
		

		</div>
	</div>
</div>
  )
}

export default MyProfile