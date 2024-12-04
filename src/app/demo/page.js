
// src/app/demo/page.js
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LiveDemo from '../../components/home/LiveDemo';


export default function DemoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-20 bg-black">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center text-blue-400 mb-8">
              Live Demonstrations
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Experience our solutions in action with live demos and interactive testing environments
            </p>
            <div className="space-y-16">
              <LiveDemo />
         
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}