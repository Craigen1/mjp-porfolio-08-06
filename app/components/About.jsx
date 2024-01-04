import Image from "next/image";

const About = () => {
  return (
    <>
      <div id="about" className="mt-16">
        <div className="mx-6">
          <div>
            <h2 className="font-bold text-center tracking-wider md:tracking-widest md:text-left text-3xl text-[#3BE55A]">
              About
            </h2>
            <div className="my-2">
              <p className="max-w-2xl text-center md:text-left text-gray-500 dark:text-gray-300">
                Hi my name is Jethro Peña studied at Pamantasan ng Lungsod ng
                Valenzuela, taking Bachelor of Science in Information
                Technology, I lived in Valenzuela City. I am passionate in
                creating some web designs and frontend designs, I interested in
                playing basketball, playing online games and also I like
                watching movies and listening to music.
              </p>
            </div>
          </div>
          <div className="md:grid md:grid-cols-3 gap-10">
            <div className="col-span-1 grid place-items-center my-2 rounded-lg">
              <Image
                src="/FB-profile.jpg"
                width={450}
                height={100}
                alt="profile-pic"
                className="rounded-md"
              />
            </div>
            <div className="block col-span-2">
              <div className="font-bold text-4xl text-[#3BE55A] mt-3">
                UI/UX Designer & Front-end Developer.
              </div>
              <span className="block max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <div className="flex flex-col gap-5 my-4">
                <span className="flex gap-3">
                  {">"} <p className="font-semibold">Birthday: </p>20 June 2001
                </span>
                <span className="flex gap-3">
                  {">"} <p className="font-semibold">Phone: </p>+63 920 463 5559
                </span>
                <span className="flex gap-3">
                  {">"} <p className="font-semibold">City: </p>Valenzuela,
                  Philippines
                </span>
                <span className="flex gap-3">
                  {">"} <p className="font-semibold">Age: </p>22
                </span>
                <span className="flex gap-3">
                  {">"} <p className="font-semibold">Email: </p>
                  penamarkjethro@gmail.com
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-500 dark:text-gray-300">
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
