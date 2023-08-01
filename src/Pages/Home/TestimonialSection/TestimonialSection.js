const TestimonialSection = () => {
    // Testimonial data
    const testimonials = [
      {
        id: 1,
        name: "Emily Johnson",
        role: "Seller",
        message: "SellCell is a shopping comparison site for people who want to peddle a used cell phone, samsung, iphone device, computer or other electronics. The site also maintains that if you could have sold your device for more, it will pay you double the difference through its “best price guarantee",
      },
      {
        id: 2,
        name: "Michael Thompson",
        role: "Buyer",
        message: "SellCell is a shopping comparison site for people who want to peddle a used cell phone, samsung, iphone device.The site also maintains that if you could have sold your device for more, it will pay you double the difference through its “best price guarantee.",
      },
      {
        id: 3,
        name: "Sophia Martinez",
        role: "Seller",
        message: "SellCell is a shopping comparison site for people who want to peddle a used cell phone, samsung, iphone device, computer or other electronics. The site also maintains that if you could have sold your device for more, it will pay you double the difference through its “best price guarantee you double the difference through its “best price guarantee",
      },
      // Add more testimonials as needed
    ];
  
    return (
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-green-700 mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <p className="text-gray-800 mb-4">{testimonial.message}</p>
                <p className="text-gray-600 font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;