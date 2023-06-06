import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Web Developer",
      testimonial: "Projest has been an incredible platform for me to showcase my projects and connect with other talented developers. I've received valuable feedback and even landed freelance gigs through the platform. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      testimonial: "I joined Projest a few months ago, and it has been a game-changer for my career. The community is supportive, and the exposure my projects have received has been amazing. Projest has opened up new opportunities for collaboration and growth.",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div className="bg-white rounded-lg shadow-lg p-6" key={index}>
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-12 h-12 rounded-full" src={`testimonial${index + 1}.jpg`} alt={`Testimonial by ${testimonial.name}`} />
                </div>
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
