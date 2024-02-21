export default function Home() {
  return (
    <div className="relative h-full lg:h-[140vh]">
      <main className="relative pb-24 ">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute bg-black left-0 top-0 -z-10 flex h-[95vh]  w-screen flex-col bg-clack"></div>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            The Witcher
          </h1>
          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quas
            ipsum totam consectetur veritatis iure natus dolorum quisquam
            reprehenderit! Eligendi perspiciatis temporibus officia? Odio
            aliquam corrupti quibusdam ab consequuntur. Dicta!
          </p>
        </div>
        <button className="w-24 rounded-full bg-white px-4 py-2 font-bold text-black md:w-32 lg:w-40 ">
          Play
        </button>
      </main>
    </div>
  );
}
