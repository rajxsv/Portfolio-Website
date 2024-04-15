import { useState } from "react";

const items = [
  {
    name: "Raji",
    age: "21",
    likes: "Football,Cricket,Coding",
  },
  {
    name: "Amit",
    age: "25",
    likes: "Reading,Coding",
  },
  {
    name: "Sophie",
    age: "28",
    likes: "Coding,Cricket",
  },
  {
    name: "David",
    age: "30",
    likes: "Football,Tennis",
  },
  {
    name: "Priya",
    age: "23",
    likes: "Cricket,Tennis",
  },
  {
    name: "Ankit",
    age: "27",
    likes: "Reading,Football",
  },
];

export default function InterviewExperience() {
  const [data, setData] = useState({
    name: "",
    age: "",
    likes: "",
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const [width, setWidth] = useState(200); // Initial width
  const [height, setHeight] = useState(150); // Initial height

  const handleResize = (e) => { 
    setWidth(e.clientX);
    setHeight(e.clientY);
  };

  return (
    <>
      <div className="w-full gap-3 items-center text-black bg-white h-full p-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            type="text"
            name="name"
            required={true}
            onChange={handleChange2}
          />

          <label htmlFor="age"> Age </label>
          <input
            id="age"
            type="number"
            name="age"
            required={true}
            onChange={handleChange2}
          />

          <label htmlFor="likes"> Comma Seperated Likes </label>
          <input
            id="likes"
            type="text"
            name="likes"
            required={true}
            onChange={handleChange2}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div
        className=" bg-white"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseMove={handleResize}
      >
        {/* Content of the resizable component */}
        Resizable Component
      </div>
    </>
  );
}
