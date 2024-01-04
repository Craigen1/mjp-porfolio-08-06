import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div id="skills" className="mt-16">
        <div className="mx-6">
          <h2 className="font-bold text-center tracking-wider md:tracking-widest md:text-left text-3xl text-[#3BE55A]">
            My Skills
          </h2>
          <ul className="flex gap-5 cursor-pointer my-4 mx-2">
            <li className="text-xl font-medium dark:text-white text-black">
              All
            </li>
            <li className="text-xl font-medium dark:text-white text-black">
              Frontend
            </li>
            <li className="text-xl font-medium dark:text-white text-black">
              Backend
            </li>
            <li className="text-xl font-medium dark:text-white text-black">
              Tools
            </li>
          </ul>

          <ul className="grid grid-cols-5 gap-4 my-4 cursor-pointer">
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/HTML5 - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/CSS3 - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/JavaScript - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/ReactJS - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/Git - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image
                  src="/Github1 - Copy.png"
                  alt="HTML"
                  width="200"
                  height="200"
                />
              </div>
            </li>
            <li className="bg-[#181818] dark:bg-[#F7F7F7] max-w-fit rounded-lg">
              <div className="p-10 rounded-md">
                <Image src="/Figma.png" alt="HTML" width="200" height="200" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
