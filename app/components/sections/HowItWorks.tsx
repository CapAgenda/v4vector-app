import Link from "next/link";

const HowItWorks = () => {
  return (
    <section id="v4v" className="bg-white text-black py-10">
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url(/images/ink-light.png" }}
      >
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Value for Value?</h2>
          <p className="mt-4 md:text-center text-center text-black\90">
            Value for value transforms creative exchange, fostering mutual
            support and appreciation. It celebrates intrinsic worth, cultivating
            a sustainable creative ecosystem.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block rounded-xl border border-black/0 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10">
            <div className="flex justify-center items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="mt-4 md:text-left text-center text-xl font-bold">
              Cast Your Request
            </h2>

            <p className="mt-2 text-center md:text-left text-sm">
              Experience the magic of true artistry. Submit your request, and
              our skilled artists will bring it to life using our mysterious
              karma algorithm. Witness the captivating emergence of artwork that
              inspires and enchants all who behold it.
            </p>
          </div>

          <div className="block rounded-xl border border-black/0 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10">
            <div className="flex justify-center items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="mt-4 md:text-left text-center text-xl font-bold ">
              Unlock Infinite Possibilities
            </h2>

            <p className="mt-2 md:text-left text-center text-sm">
              Discover the power of our unique karma algorithm that selects and
              showcases requests on our platform. Experience the joy of sharing
              your creations with a global audience, as your work becomes
              accessible to anyone seeking inspiration and creativity.
            </p>
          </div>

          <div className="block rounded-xl border border-black/0 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10">
            <div className="flex justify-center items-center pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm-.97 6.53a.75.75 0 10-1.06-1.06L7.72 9.22a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06l-.97-.97h3.065a1.875 1.875 0 010 3.75H12a.75.75 0 000 1.5h1.125a3.375 3.375 0 100-6.75h-3.064l.97-.97z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="mt-4 md:text-left text-center text-xl font-bold">
              Reciprocal Value Exchange
            </h2>

            <p className="mt-2 md:text-left text-center text-sm ">
              When you receive incredible artistry, we encourage you to give
              back in a way that reflects its worth. By fostering a reciprocal
              relationship, we create a thriving community where artists and
              patrons support each other's creative journeys. Embrace the joy of
              reciprocation and help cultivate a sustainable ecosystem of
              artistic inspiration.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#vectorrequest"
            className="inline-block  font-bold rounded-xl border border-black/0 p-8 shadow-xl transition hover:border-white/10 hover:shadow-white/10 hover:border-black focus:outline-none focus:ring focus:ring-white"
          >
            Submit an Idea
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
