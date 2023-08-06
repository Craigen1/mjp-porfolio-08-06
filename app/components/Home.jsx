import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const Home = () => {
  return (
    <div className="text-center h-screen w-screen">
      <div className="w-full h-full flex items-center mx-auto justify-center">
        <div className="mx-4">
          <div className="tracking-widest">
            <p className="text-xs tracking-widest uppercase text-gray-400 dark:text-gray-300">
              Let's build something incredible together
            </p>
            <div className="text-3xl md:text-4xl font-bold py-3 max-w-4xl">
              <h1>
                Welcome I'm <span className="text-[#3FE95E]">Jethro</span>
              </h1>
              <p className="py-2">A Front-end Web Developer</p>
            </div>
          </div>
          <p className="text-center tracking-wide md:max-w-3xl text-sm text-gray-500 dark:text-gray-300">
            I'm a specialized front-end web developer dedicated to crafting
            exceptional digital experiences. My focus centers on building
            responsive front-end web applications, while also actively exploring
            the world of APIs to enhance my skill set. Let's create seamless and
            innovative web solutions together.
          </p>
          <div className="hidden md:flex items-center justify-center w-full mt-4">
            <div className="sm-acc">
              <FaLinkedinIn />
            </div>
            <div className="sm-acc">
              <FaGithub />
            </div>
            <div className="sm-acc">
              <FaTwitter />
            </div>
            <div className="sm-acc">
              <AiOutlineMail />
            </div>
            <div className="sm-acc">
              <BsFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
