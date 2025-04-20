import StephanieImage from "../assets/Stephanie_Mexico.jpg"; 

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-700 to-white py-20 px-6 relative flex items-start justify-center">

      <div className="absolute top-10 left-10 hidden md:block">
        <img
          src={StephanieImage}
          alt="Stephanie in Mexico"
          className="rounded-2xl shadow-lg w-80 h- object-cover border-4 border-white"
        />
      </div>
     
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-3xl p-12 pt-20 pb-20 max-w-4xl w-full border border-green-300 mt-15 md:ml-80 min-h-[700px]">
        <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
          About Me
        </h2>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed text-center">
        I’m Stephanie Burbank, a digital media student with a passion for front-end development and user experience design. 
        I'm originally from New York and earned my Associates Degree there before moving to Florida. 
        I love to be creative, not only in my degree but in my everyday life. When I'm not at school i'm working as a barista and spending time at the movies.
        When working on projects I enjoy coming up with fun ideas and bringing them to life through thoughtful design.
         Whether I’m creating an intuitive interface or experimenting with new design tools, I love building digital experiences that are both functional and visually engaging.
        I'm always looking for ways to grow as a developer and designer while making things that feel meaningful, fun, and user friendly.

        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Skills
            </h3>
            <ul className="list-disc list-inside">
              <li>React / React Native</li>
              <li>JavaScript / TypeScript</li>
              <li> HTML / CSS</li>
              <li>PHP & MySQL</li>
              <li>Git & GitHub</li>
              <li>SASS</li>
              <li>UI/UX Design Principles</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Interests
            </h3>
            <ul className="list-disc list-inside">
              <li>UI/UX Design</li>
              <li>Video Editing and Filmmaking</li>
              <li>Listening to music</li>
              <li>Spending time with my pets</li>
              <li>Having game nights with my friends</li>
              <li>Traveling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
