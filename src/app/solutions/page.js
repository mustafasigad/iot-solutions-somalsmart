// src/app/solutions/page.js
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProfessionalServices from '../../components/solutions/ProfessionalServices';



export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-20 bg-black">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold text-center text-blue-400 mb-8">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Comprehensive IoT solutions for water management, automation, and workforce monitoring
            </p>
            <div className="space-y-16">
              <ProfessionalServices />
        
             
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}