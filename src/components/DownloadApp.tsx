import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img src="/logo.png" alt="Click Deal Logo" className="h-20 sm:h-24 md:h-28 lg:h-32 w-16 sm:w-24 md:w-28 lg:w-32 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6">Get the App</h2>
        <p className="text-xl text-gray-600 mb-8">
          Coming Soon to iOS and Android
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="outline" disabled>
            App Store
          </Button>
          <Button size="lg" variant="outline" disabled>
            Play Store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
