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