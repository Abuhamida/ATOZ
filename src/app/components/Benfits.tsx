const cards_data = [
  {
    id: 1,
    data: "Creative Thinking",
    style: {
      background: "#e8f7fb",
      color: "#000000",
    },
  },
  {
    id: 2,
    data: "Boosting Self-Confidence",
    style: {
      background: "#006cb2",
      color: "#ccc9dc",
    },
  },
  {
    id: 3,
    data: "Critical Thinking",
    style: {
      background: "#e8f7fb",
      color: "#000000",
    },
  },
  {
    id: 4,
    data: "Problem-Solving Skills",
    style: {
      background: "#006cb2",
      color: "#ccc9dc",
    },
  },
];

export default function Benefits() {
  return (
    <div className="h-auto md:h-96 gap-10 flex flex-col items-center justify-center m-5 lg:m-10">
      <div className="text-center md:w-3/4 lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-1xl font-bold md:text-2xl text-blue-gray-700">
          Benefits of Learning Programming from a Young Age
        </h1>
        <p className="text-xl">
          A recent study published in the Journal of Science, Technology, Engineering, and Education found that teaching programming at an early age improves problem-solving skills and critical thinking, leading to improved school grades in scientific subjects.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-5">
        {cards_data.map((item) => (
          <li key={item.id} style={item.style} className="card w-56 lg:w-56 text-center p-5">
            <div>
              <time>{item.data}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


