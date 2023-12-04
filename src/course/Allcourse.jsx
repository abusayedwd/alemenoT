 
import { Link } from 'react-router-dom';

 
const Allcourse = ({course}) => {
   // eslint-disable-next-line react/prop-types
   const {instructor,id, name, duration, thumbnail, location} = course;
   return (
      <div >
              <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {thumbnail} alt="Shoes" className="rounded-xl h-48 w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Course Name: {name}</h2>
    <p> Instructor :{instructor}</p>
    <p> Duration :{duration}</p>
    <p> Location : {location}</p>
    <div className="card-actions">
      <button className="btn btn-primary"> <Link to = {`/detail/${id}`}> View Details</Link></button>
    </div>
  </div>
</div>
      </div>
   );
};

export default Allcourse;