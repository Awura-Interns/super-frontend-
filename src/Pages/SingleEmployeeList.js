
import { Link, useParams } from 'react-router-dom';
import employees from "../Helpers/EmployeeData"

const Singleemployee = () => {
  
  const {EmployeeId} = useParams();
  console.log(EmployeeId)
  const employee = employees.find((employee)=> employee.id === EmployeeId);
  const { birthdate} = employee
  return (
    <section className='section employee'>
     
      
      <h2> {birthdate}</h2>
      <Link to='/EmployeeList' className='btn'>Back employees</Link>
    </section>
  );
};

export default Singleemployee;
