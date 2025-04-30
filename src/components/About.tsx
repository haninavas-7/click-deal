import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-600">
                Founded with a vision to revolutionize the real estate industry,
                Click Deal eliminates the traditional broker model to connect
                buyers and sellers directly, saving both time and money.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                We're committed to making real estate transactions simpler,
                more transparent, and more affordable by leveraging technology
                to empower both buyers and sellers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
