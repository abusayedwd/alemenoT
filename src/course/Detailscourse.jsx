import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

 
 

const Detailscourse = () => {
   const {id} = useParams()
   const details = useLoaderData() 
     const [course, setCourse] = useState([])
      useEffect( () => {
         const detailss = details.find(dt => dt.id == id )
          setCourse(detailss)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
      const {name, instructor, description, duration, enrollmentStatus, location, schedule, syllabus, thumbnail,prerequisites} = course;

  return (
    <div className="my-12">
      <h1 className=" font-semibold text-2xl text-center mb-8 text-orange-300">{name} coures details info :</h1> 

      <div className="md:flex shadow-2xl p-12 rounded-lg gap-4">
         <div className="md:w-[30%] w-full">
         <img className="h-96 w-96" src= {thumbnail} alt="Movie"/> 
         </div>
         <div className="md:w-[70%] w-full">
            <div>
                <p> Instructor: {instructor}</p>
                <p> Description: {description}</p>
                <p> EnrollmentStatus: {enrollmentStatus}</p>
                <p>Duration: {duration}</p>
                <p>Schedule: {schedule}</p>
                <p>Location: {location}</p>
                <p>Prerequisites: {prerequisites}</p>
                 
            </div>
             
            <hr />
            <div className="md:flex">
               <div> <h1 className="mt-4 font-bold text-xl">Shedule for week:</h1>
                     {
                       syllabus&&syllabus.map((syll, index) => 
                           <div key={index} className="md:grid grid-cols-3">
                              <p className="font-bold">Week:{syll.week}</p>
                              <p>{syll.topic}</p>
                              <p>{syll.content}</p>
                           </div>
                        )
                     }
               </div>
               <div>
               </div>
            </div>
         </div> 
</div>
                        <button className="btn bg-orange-400 btn-primary w-12 mx-auto">
                           <Link to = '/'>Back</Link>
                        </button>
    </div>
  );
};

export default Detailscourse;
