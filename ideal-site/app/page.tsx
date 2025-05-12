import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel3D from '../components/Carousel3D';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="/images/formatura-mulher.jpg"
            alt="Formatura"
            fill
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            <span className="text-gold">Ideal</span> Equipe de Vendas Online
          </h1>
          <p className="text-xl md:text-2xl font-montserrat text-white mb-10 max-w-3xl mx-auto">
            Álbuns de formatura e materiais relacionados com atendimento 24h e método simplificado de vendas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produtos" className="btn-primary text-lg">
              Ver Produtos
            </Link>
            <Link href="/cliente/login" className="btn-outline text-lg">
              Área do Cliente
            </Link>
          </div>
        </div>
      </section>
      
      {/* Carrossel 3D */}
      <Carousel3D />
      
      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            O que nossos clientes dizem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-cormorant font-bold text-xl">Maria Silva</h4>
                  <p className="text-gray-600">Formanda em Direito</p>
                </div>
              </div>
              <p className="font-montserrat">
                "O atendimento online foi prático e seguro. Consegui escolher meu álbum com tranquilidade e o vendedor estava sempre disponível pelo WhatsApp para tirar minhas dúvidas."
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-silver flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-cormorant font-bold text-xl">João Pereira</h4>
                  <p className="text-gray-600">Formando em Engenharia</p>
                </div>
              </div>
              <p className="font-montserrat">
                "Fiquei impressionado com a flexibilidade de horários. Mesmo tarde da noite consegui falar com um vendedor e finalizar meu pedido. A qualidade do álbum superou minhas expectativas!"
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-cormorant font-bold text-xl">Carolina Mendes</h4>
                  <p className="text-gray-600">Formanda em Medicina</p>
                </div>
              </div>
              <p className="font-montserrat">
                "O sistema de pré-visualização das fotos escolhidas foi fundamental para eu montar meu álbum perfeito. O processo todo foi simples e o resultado ficou incrível!"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sobre Nós */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6 text-gold">
                Método Simplificado de Vendas
              </h2>
              <p className="font-montserrat mb-6 text-lg">
                Somos representantes de vendas de álbuns com um método simplificado, utilizando tecnologia e inovação com segurança para o cliente e empresas do ramo.
              </p>
              <p className="font-montserrat mb-6 text-lg">
                Nossa equipe está disponível 24 horas por dia, oferecendo atendimento flexível e personalizado para garantir que você tenha a melhor experiência na escolha do seu álbum de formatura.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <p className="font-raleway font-bold text-xl">
                  Segurança e qualidade garantidas
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-cormorant font-bold text-xl text-black mb-2">Atendimento 24h</h3>
                <p className="font-montserrat text-gray-600">Plantão de vendedores disponível a qualquer hora</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-cormorant font-bold text-xl text-black mb-2">Suporte via WhatsApp</h3>
                <p className="font-montserrat text-gray-600">Atendimento personalizado e rápido</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-cormorant font-bold text-xl text-black mb-2">Pagamento Seguro</h3>
                <p className="font-montserrat text-gray-600">Links de pagamento seguros e confiáveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-8">
            Pronto para garantir o seu álbum de formatura?
          </h2>
          <Link href="/produtos" className="btn-primary text-lg">
            Ver Produtos
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
