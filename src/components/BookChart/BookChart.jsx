import { useLoaderData } from "react-router-dom";
import ShowBookChart from "./ShowBookChart";



const BookChart = () => {
 const bookChart = useLoaderData();
console.log(bookChart);
  return (   
    <div> 
       <ShowBookChart data={bookChart}></ShowBookChart> 
    </div>
  );
};

export default BookChart;
