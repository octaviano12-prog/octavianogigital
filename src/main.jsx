import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, CheckCircle, Code2, Globe2, Laptop, LineChart, MessageCircle, Rocket, Search, ShoppingCart, Sparkles, Star, Target, Zap } from 'lucide-react';
import './style.css';

const whatsappNumber = '5518991178792';
const whatsappText = encodeURIComponent('Olá, Octaviano! Quero um orçamento para criação de site.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

function App() {
  const services = [
    { icon: Globe2, title: 'Sites Institucionais', text: 'Sites modernos para apresentar sua empresa, serviços, fotos, contatos e diferenciais.' },
    { icon: Rocket, title: 'Landing Pages', text: 'Páginas focadas em conversão para campanhas, anúncios, captação de leads e vendas.' },
    { icon: Code2, title: 'Sistemas Web', text: 'Painéis administrativos, cadastros, dashboards e soluções personalizadas para sua operação.' },
    { icon: ShoppingCart, title: 'Lojas Virtuais', text: 'Estrutura para vender produtos online com visual profissional e experiência otimizada.' },
    { icon: Search, title: 'SEO Google', text: 'Organização técnica e estratégica para melhorar a presença da sua empresa nas pesquisas.' },
    { icon: MessageCircle, title: 'Integração WhatsApp', text: 'Botões, chamadas e caminhos rápidos para transformar visitantes em conversas comerciais.' },
  ];

  const portfolio = [
    'Sites para indústrias e metalúrgicas',
    'Portais para prestadores de serviço',
    'Sistemas administrativos personalizados',
    'Projetos para pet shops, clínicas e comércios',
  ];

  return (
    <main>
      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle size={28} />
      </a>

      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div className="brand-mark">OD</div>
            <div>
              <strong>Octaviano Digital</strong>
              <span>Soluções digitais para empresas</span>
            </div>
          </div>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="btn btn-small" href={whatsappLink} target="_blank" rel="noreferrer">Orçamento</a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge"><Sparkles size={16} /> Sites profissionais, rápidos e responsivos</div>
            <h1>Transformamos empresas em presença digital.</h1>
            <p>
              Criação de sites, landing pages, sistemas web, lojas virtuais, SEO Google e soluções digitais sob medida para empresas que querem crescer com profissionalismo.
            </p>
            <div className="hero-actions">
              <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={18} /></a>
              <a className="btn btn-outline" href="#servicos">Ver serviços</a>
            </div>
            <div className="trust-row">
              <span><CheckCircle size={18} /> Atendimento personalizado</span>
              <span><CheckCircle size={18} /> Site para celular</span>
              <span><CheckCircle size={18} /> Foco em resultado</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="browser-bar"><span></span><span></span><span></span></div>
            <div className="screen">
              <div className="metric"><Zap /> Performance</div>
              <h3>Site profissional para vender mais</h3>
              <p>Layout moderno, contato rápido pelo WhatsApp, SEO inicial e estrutura preparada para divulgação.</p>
              <div className="progress"><span></span></div>
              <div className="card-list">
                <div><Laptop /> Responsivo</div>
                <div><Target /> Estratégico</div>
                <div><LineChart /> Conversão</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section">
        <div className="container">
          <div className="section-title">
            <span>Serviços</span>
            <h2>Soluções digitais para sua empresa aparecer, vender e crescer.</h2>
          </div>
          <div className="services-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <article className="service-card" key={item.title}>
                  <Icon size={30} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section dark-section">
        <div className="container portfolio-grid">
          <div>
            <div className="section-title left">
              <span>Portfólio</span>
              <h2>Projetos pensados para empresas reais.</h2>
            </div>
            <p className="muted">Desenvolvimento com foco em credibilidade, clareza, velocidade e geração de contatos comerciais.</p>
          </div>
          <div className="portfolio-list">
            {portfolio.map((item) => (
              <div key={item}><Star size={18} /> {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="container about-grid">
          <div className="about-card">
            <strong>Octaviano Cesar Ribeiro</strong>
            <span>Engenheiro • Empresário • Desenvolvedor Web</span>
          </div>
          <div>
            <div className="section-title left">
              <span>Sobre</span>
              <h2>Autoridade técnica aplicada ao digital.</h2>
            </div>
            <p>
              A Octaviano Digital nasce com a proposta de unir visão técnica, experiência empresarial e desenvolvimento web para entregar sites e sistemas profissionais para empresas, indústrias, comércios e prestadores de serviços.
            </p>
            <div className="checks">
              <span><CheckCircle /> Engenheiro Mecânico</span>
              <span><CheckCircle /> Engenheiro de Segurança do Trabalho</span>
              <span><CheckCircle /> Especialista em Engenharia de Soldagem</span>
              <span><CheckCircle /> Desenvolvimento de sites e sistemas</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="cta">
        <div className="container cta-box">
          <h2>Pronto para criar o site profissional da sua empresa?</h2>
          <p>Solicite um orçamento e receba uma proposta personalizada para seu negócio.</p>
          <div className="contact-row">
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
            <a className="email" href="mailto:octaviano12@gmail.com">octaviano12@gmail.com</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <strong>Octaviano Digital</strong>
          <span>© 2026 - Sites Profissionais, Sistemas Web e Soluções Digitais</span>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
