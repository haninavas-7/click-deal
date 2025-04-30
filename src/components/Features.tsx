import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "No Brokers",
    description: "Connect directly with property owners and save on commissions",
  },
  {
    title: "Verified Users",
    description: "All users are verified for your safety and peace of mind",
  },
  {
    title: "Secure Chat",
    description: "Communicate safely through our encrypted platform",
  },
  {
    title: "Smart Scheduling",
    description: "Book viewings instantly based on mutual availability",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transform transition-transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
