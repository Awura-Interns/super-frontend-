import { Link } from 'react-router-dom';
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/EmployeeList.css"
import axios from "axios";
// import employees from "../Helpers/EmployeeData"
import { useEffect, useState } from 'react'
const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

  // fetch data from the localhost and save it to the state
    useEffect(() => {
        setLoading(true)
        axios.get('http://127.0.0.1:8000/staff/employee/')
        .then(res => {
            console.log(res.data)
            setEmployees(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setError(true)
        })
    }, [])
    return (
        <>
            <body className="Body">

                <section class="listing">

                    <article class="leaderboard">
                        <header>



                            <h1 class="leaderboard__title"><span class="leaderboard__title--top">Employee</span><span
                                class="leaderboard__title--bottom">Listing</span></h1>
                        </header>


                        {employees.map((employee) => {
                            return (
                                <main class="leaderboard__profiles" key={employee.id}>
                                    <article class="leaderboard__profile">
                                        <img src={employee.profile_picture} alt="Mark Zuckerberg"
                                            class="leaderboard__picture" />
                                        <span class="leaderboard__name">{employee.user.first_name} {employee.user.last_name}</span>

                                        <span class="leaderboard__value">
                                            <Link to={`/EmployeeList/${employee.id}`}>more</Link>
                                        </span>
                                    </article>
                                </main>
                            )
                        })}







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
                                <input type="submit" class="btn" />
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </>
    )
}
export default EmployeeList;