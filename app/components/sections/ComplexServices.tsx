import Link from "next/link";

const ComplexServicesSection = () => {
  const services = [
    "Web Development",
    "Graphic Design",
    "Logo Design",
    "Packaging Design",
    "Illustration",
    "Digital Art",
    "Creative Services",
    "Webflow Designer",

    // Add more services here
  ];

  return (
    <section className="overflow-hidden bg-black/90 text-white sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto mb-6 max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold md:text-3xl">
            Interested in something a bit more complex?
          </h2>
          <p className="hidden md:mt-4 md:block">
            We offer a range of professional services to meet your design and
            development needs. Take a look at the offerings below and schedule a
            call to discuss options for larger design projects:
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-2">
          {services.map((service, index) => (
            <li key={index} className="">
              <div className="text-center mt-1 md:mt-2">{service}</div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link
            href="https://calendly.com/capagenda/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full border border-white px-12 py-3 text-sm font-medium text-white/90 hover:bg-white/90 hover:text-black focus:outline-none focus:ring active:bg-white/80"
          >
            Schedule a call
          </Link>
        </div>
      </div>
      <img
        alt="Student"
        src="/images/complex.png"
        className="h-56 w-full object-cover sm:h-full brightness-50"
      />
    </section>
  );
};

export default ComplexServicesSection;
