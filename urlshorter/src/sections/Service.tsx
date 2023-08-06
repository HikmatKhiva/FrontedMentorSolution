import { ServiceCard } from "../components";
import { services } from "../config";
const Service = () => {
  return (
    <section id="service" className="bg-light py-10">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-bold">Advanced Statistics</h2>
          <p className="mt-3 text-gray-violet text-sm md:text-base font-medium">
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </p>
        </div>

        <div className="flex gap-5 mt-14 flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
