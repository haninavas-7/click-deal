
import { Calendar, Mail, Check, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: Users,
    title: "Create Profile",
    description: "Sign up and verify your account in minutes",
  },
  {
    icon: Calendar,
    title: "Schedule Calls",
    description: "Book viewings directly with property owners",
  },
  {
    icon: Mail,
    title: "Secure Chat",
    description: "Communicate safely through our platform",
  },
  {
    icon: Check,
    title: "Close Deal",
    description: "Finalize your transaction broker-free",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
