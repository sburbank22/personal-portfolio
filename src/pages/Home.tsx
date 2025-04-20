import HomeImage from "../assets/Stephanie_London.jpg"; 

const Home = () => {
  return (
    <section
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-br from-green-900 via-green-800 to-green-700
        px-6 py-20
      "
    >
      <img
        src={HomeImage}
        alt="Stephanie in London"
        className="w-80 h-80 object-cover rounded-full border-4 border-white shadow-lg mb-8"
      />

      <div className="relative z-10 max-w-2xl bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-green-700 text-center">
        <h1 className="text-6xl font-extrabold text-green-600 mb-6 drop-shadow-lg transform hover:scale-105 transition-transform duration-500">
          Welcome!
        </h1>
        <p className="text-lg text-black-500 leading-relaxed">
          Hello, welcome to my digital portfolio. My name is Stephanie Burbank,
          a senior in the Digital Media Major - Web Design Track. Take a look
          around and explore my projects, skills, and what I bring to the table.
          Excited for you to see my work and I hope you enjoy the site!
        </p>
        <div className="mt-10 mx-auto h-1 w-24 bg-green-700 rounded-full shadow-md" />
      </div>
    </section>
  );
};

export default Home;
