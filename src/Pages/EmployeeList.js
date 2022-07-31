
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/EmployeeList.css"
export default function EmployeeList(){
    return(
        <body className="Body">

<section class="listing">

<article class="leaderboard">
    <header>

        

        <h1 class="leaderboard__title"><span class="leaderboard__title--top">Employee</span><span
                class="leaderboard__title--bottom">Listing</span></h1>
    </header>

    <main class="leaderboard__profiles">
        <article class="leaderboard__profile">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark Zuckerberg"
                class="leaderboard__picture"/>
            <span class="leaderboard__name">Mark Zuckerberg</span>
            <span class="leaderboard__value">35.7<span>B</span></span>
        </article>





    </main>
    </article>
</section>
<section>

<div class="Employewrapper">
    <div class="title">
        employee registration
    </div>
    <form class="form">
        <div class="inputfield">
            <label>First Name</label>
            <input type="text" class="input" />
        </div>
        <div class="inputfield">
            <label>Last Name</label>
            <input type="text" class="input" />
        </div>
        <div class="inputfield">
            <label>Email</label>
            <input type="email" class="input" />
        </div>
        <div class="inputfield">
            <label>Password</label>
            <input type="password" class="input" />
        </div>
        <div class="inputfield">
            <label>Confirm password</label>
            <input type="password" class="input" />
        </div>
        <div class="inputfield">
            <label>Phone</label>
            <input type="tel" class="input" />
        </div>
        
        <div class="inputfield">
            <label for="file">Profile Picture</label>
            <input type="file" id="file" accept="image/*" class="input" />
        </div>
        <div class="inputfield">
            <label>Birthdate</label>
            <input type="date" class="input" />
        </div>
        <div class="inputfield">
            <label for="file">Id Card</label>
            <input type="file" id="file" accept="image/*" class="input" />
        </div>
        <div class="inputfield">
            <input type="submit" class="btn"/>
        </div>
    </form>
    </div>
</section>
</body>
    )
}