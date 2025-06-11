import tarning from "../assets/tr1.png";

const Tarning = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${tarning})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "800px",
      }}
    >
      <div className="max-w-[1300px]   mx-auto h-full items-center flex">
        <div className="w-[560px] h-[700px] rounded-2xl bg-white  leading-12 py-12 px-10">
          <h2 className="font-semibold text-3xl">
            Turning your real estate dreams true!
          </h2>
          <p>
            Have questions or ready to take the next step? Whether you’re
            buying, selling, or just exploring options.
          </p>
          <button className="px-6 py-2 border rounded-2xl text-sm">
            Get a Quote
          </button>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border-b mt-12"
          >
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process. 
            </div>
            
          </div>
           <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border-b"
          >
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process. 
            </div>
            
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border-b"
          >
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process. 
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarning;
