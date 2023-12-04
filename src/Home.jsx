import  { useEffect, useState } from 'react';
import Allcourse from './course/Allcourse'; 

const Home = () => {
    
   const [courses, setCourses] = useState([])
    
   useEffect(() => {
      fetch("course.json")
      .then(res => res.json())
      .then(data => setCourses(data))
       
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    
   return (
      <div>
         <h1 className='text-2xl my-10 text-orange-300 text-center font-bold'>All Courses</h1>
         <div className='grid md:grid-cols-3 gap-4 py-5'>

         {
            courses.map(course => <Allcourse key={course.id} course = {course}>

            </Allcourse>
             
            )
         }
         </div>
          
      </div>
   );
};

export default Home;