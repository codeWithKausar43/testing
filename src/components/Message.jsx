import message from "../assets/message.png";

const Message = () => {
  return (
    <div className="max-w-[1090px] mx-auto my-32">
      <h3 className="text-4xl font-bold text-center mb-14">
        A message from our CEO
      </h3>
      <div
        style={{
          backgroundImage: `url(${message})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "700px",
        }}
        className="relative"
      >
        {/* Text Box */}
        <div className="absolute top-[500px] left-10 text-white w-[90%] max-w-[1000px] font-semibold text-xl border p-4 flex justify-between items-center ">
          <p>Kausar Ahammed</p>
          <p>Kausar Ahammed</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
