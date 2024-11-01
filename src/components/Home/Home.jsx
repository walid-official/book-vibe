import Banner from "../../assets/banner.png"
import Books from "../Books/Books";
const Home = () => {
  return (
    <div>
      <div className="hero bg-slate-300 py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Banner}
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="md:text-5xl text-3xl font-bold md:w-[60%] md:leading-tight ">Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white my-6 hover:bg-[#23BE0A]">view The List</button>
          </div>
        </div>
      </div>
      <Books></Books>
      
    </div>
  );
};

export default Home;
