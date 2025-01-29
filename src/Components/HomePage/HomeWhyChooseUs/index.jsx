import { StarOutlined, HomeOutlined, TruckOutlined, SafetyOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const HomeWhyChooseUs = () => {
  const features = [
    {
      icon: <StarOutlined className="text-orange-500 text-4xl" />, 
      title: "QUALITY AND SAVING",
      description: "Comprehensive quality control and affordable prices",
    },
    {
      icon: <HomeOutlined className="text-orange-500 text-4xl" />, 
      title: "GLOBAL WAREHOUSE",
      description: "37 overseas warehouses",
    },
    {
      icon: <TruckOutlined className="text-orange-500 text-4xl" />, 
      title: "FAST SHIPPING",
      description: "Fast and convenient door to door delivery",
    },
    {
      icon: <SafetyOutlined className="text-orange-500 text-4xl" />, 
      title: "PAYMENT SECURITY",
      description: "More than 10 different secure payment methods",
    },
    {
      icon: <QuestionCircleOutlined className="text-orange-500 text-4xl" />, 
      title: "HAVE QUESTIONS?",
      description: "24/7 Customer Service - We’re here and happy to help!",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;