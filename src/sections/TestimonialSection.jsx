import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      testimonial: "Projest has been an incredible platform for me to showcase my projects and connect with other talented developers. I've received valuable feedback and even landed job interviews through the platform. Projest has truly helped me level up my skills and build a strong professional network.",
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      testimonial: "As a designer, Projest has provided me with a platform to share my design portfolio and collaborate with developers on innovative projects. The feedback and support I've received from the community have been invaluable.",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div className="border border-gray-300 rounded-lg shadow-lg p-6" key={index}>
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
