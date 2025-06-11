import banner from "./assets/banner1.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <header
        className="min-h-[870px]"
        style={{
          backgroundImage: `url(${banner})`,
          width: "full",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar></Navbar>
        <div className="max-w-[1300px] mx-auto mt-36">
          <h3 className="text-7xl font-bold text-white w-10/12">
            Turning Your Real Estate Dreams into Reality
          </h3>
          <p className="mt-10 text-white w-6/12">
            Forget clunky application forms. We offer a modern, user-friendly
            platform that makes applying for a job a breeze.
          </p>
          <label className="input mt-[42px]">
           
            <input type="text" className="grow" placeholder="search" />
            <span className="badge bg-[#203F30] badge-xs text-white py-3 px-4">Search for booking</span>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
