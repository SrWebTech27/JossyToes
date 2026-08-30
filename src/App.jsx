import { ArrowUpRight, Clock3, HeartPulse, MapPin, Menu, ShieldCheck, Sparkles, X } from 'lucide-react'
import { FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import './styles/app.css'
import corteCorrecto from './assets/images/categories/cortescorrectodeuñas.jpeg'
import callosDurezas from './assets/images/categories/eliminaciondecallosyduraezas.jpeg'
import extraccionUniero from './assets/images/categories/extracciódeuñero.jpeg'
import limpieza from './assets/images/categories/limpuezaprogundaydesinfeccion.jpeg'
import pieDiabetico from './assets/images/categories/piediabetico.jpeg'
import hongos from './assets/images/categories/tratamientodehongosenuñas.jpeg'

const services = [
  { icon: '01', title: 'Corte correcto de uñas', text: 'Previene molestias y mantiene tus uñas sanas.' },
  { icon: '02', title: 'Extracción de uñero', text: 'Alivio cuidadoso para volver a caminar mejor.' },
  { icon: '03', title: 'Callos y durezas', text: 'Piel más suave, sin dolor y sin agresiones.' },
  { icon: '04', title: 'Hongos en uñas', text: 'Tratamiento guiado para recuperar su aspecto.' },
  { icon: '05', title: 'Limpieza profunda', text: 'Higiene, desinfección y sensación de frescura.' },
  { icon: '06', title: 'Pie diabético', text: 'Cuidado especializado con máxima prevención.' },
]

const benefits = [
  { icon: HeartPulse, title: 'Atención personalizada', text: 'Diagnóstico preciso y tratamiento adaptado a ti.' },
  { icon: ShieldCheck, title: 'Máxima bioseguridad', text: 'Protocolos estrictos e instrumental 100% esterilizado.' },
  { icon: Sparkles, title: 'Tecnología avanzada', text: 'Procedimientos modernos, rápidos y sin dolor.' },
]

const catalogItems = [
  { badge: 'Más pedido', title: 'Corte correcto de uñas', text: 'Limpieza, forma y cuidado para mantener tus uñas sanas y cómodas.', image: corteCorrecto },
  { badge: 'Popular', title: 'Eliminación de callos y durezas', text: 'Alivio inmediato y sensación de suavidad con un tratamiento profesional.', image: callosDurezas },
  { badge: 'Nuevo', title: 'Extracción de uñero', text: 'Cuidado preciso para reducir dolor y recuperar la comodidad al caminar.', image: extraccionUniero },
  { badge: 'Recomendado', title: 'Limpieza profunda y desinfección', text: 'Rutina integral para pies más sanos, frescos y protegidos.', image: limpieza },
  { badge: 'Bienestar', title: 'Pie diabético', text: 'Seguimiento y prevención especializada para mantener tus pies saludables.', image: pieDiabetico },
  { badge: 'Especial', title: 'Tratamiento de hongos en uñas', text: 'Atención guiada para fortalecer y recuperar la apariencia natural.', image: hongos },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const whatsappUrl = 'https://wa.me/51933447780?text=Hola%20JossyToes%2C%20quiero%20agendar%20una%20cita.'
  const facebookUrl = 'https://www.facebook.com/share/18oJ3DsRwq/'
  const tiktokUrl = 'https://www.tiktok.com/@podologiajossytoes?_r=1&_t=ZS-99IXRn0Wv4C'
  const mapsUrl = 'https://maps.app.goo.gl/b7vnd5LCLQ4n9aAw6'

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="JossyToes, inicio">
          <span className="brand-mark"><img src="/brand/logo.jpeg" alt="" /></span>
          <span><strong>JOSSY</strong><b>TOES</b></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicioselian</a>
          <a href="#catalogo" onClick={() => setMenuOpen(false)}>Catálogo</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Por qué elegirnos</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar cita <ArrowUpRight size={17} /></a>
        <button className="menu-toggle" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Centro podológico · Miraflores</p>
            <h1>El bienestar<br /><em>empieza</em> por tus pies.</h1>
            <p className="hero-text">Cuida tu forma de caminar con atención experta, cercana y dedicada a que vuelvas a sentirte bien.</p>
            <div className="hero-actions"><a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Quiero una cita <ArrowUpRight size={18} /></a><a className="text-link" href="#servicios">Conoce nuestros servicios <span>↓</span></a></div>
            <div className="hero-note"><div className="avatars"><span>J</span><span>+</span><span>●</span></div><p><strong>Especialistas que te escuchan</strong><br />Más de 1,000 pacientes atendidos</p></div>
          </div>
          <div className="hero-art">
            <div className="art-ring ring-one"></div><div className="art-ring ring-two"></div>
            <div className="art-label label-top">Pies sanos<br /><strong>vida activa</strong></div>
            <img src="/brand/logo.jpeg" alt="Logo de JossyToes Centro Podológico" />
            <div className="art-label label-bottom"><span>01</span> Cuidado integral</div>
          </div>
        </section>

        <section className="ticker"><div className="ticker-track"><span>Camina sin dolor</span><i>✳</i><span>luce unos pies saludables</span><i>✳</i><span>Camina sin dolor</span><i>✳</i><span>luce unos pies saludables</span><i>✳</i><span>Camina sin dolor</span><i>✳</i><span>luce unos pies saludables</span><i>✳</i></div></section>

        <section className="services section" id="servicios">
          <div className="section-heading"><div><p className="eyebrow"><span></span> Lo que hacemos</p><h2>Soluciones para<br /><em>cada paso.</em></h2></div><p className="section-intro">Tu salud merece más que una solución rápida. En JossyToes evaluamos, cuidamos y acompañamos cada proceso.</p></div>
          <div className="service-grid">{services.map((service, index) => <article className={`service-card card-${index + 1}`} key={service.title}><span className="service-number">{service.icon}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-arrow" size={22} /></article>)}</div>
        </section>

        <section className="catalog section" id="catalogo">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span></span> Catálogo</p>
              <h2>Opciones para<br /><em>tu cuidado diario.</em></h2>
            </div>
            <p className="section-intro">Elegir un tratamiento adecuado marca la diferencia. Aquí tienes algunas de nuestras opciones más solicitadas para cuidar tus pies con confianza.</p>
          </div>
          <div className="catalog-highlights" aria-label="Beneficios del catálogo">
            <span className="catalog-pill">Higiene</span>
            <span className="catalog-pill">Prevención</span>
            <span className="catalog-pill">Bienestar</span>
          </div>
          <div className="catalog-grid">
            {catalogItems.map(({ badge, title, text, image }) => (
              <article className="catalog-card" key={title}>
                <span className="catalog-badge">{badge}</span>
                <div className="catalog-visual" aria-hidden="true">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="catalog-footer">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">Reservar</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trust section" id="nosotros">
          <div className="trust-visual"><div className="trust-circle"><img src="/brand/logo.jpeg" alt="JossyToes" /></div><span className="stamp">CUIDADO<br />CON<br />PROPÓSITO</span></div>
          <div className="trust-copy"><p className="eyebrow"><span></span> Tu tranquilidad, primero</p><h2>Un espacio para<br /><em>volver a confiar.</em></h2><p className="section-intro">Somos especialistas dedicados al cuidado integral de tus pies. Trabajamos con precisión, calidez y protocolos que te hacen sentir en buenas manos.</p><div className="benefits">{benefits.map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><Icon size={22} /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="text-link dark-link" href={whatsappUrl} target="_blank" rel="noreferrer">Conoce nuestra atención <ArrowUpRight size={17} /></a></div>
        </section>

        <section className="contact section" id="contacto"><div><p className="eyebrow"><span></span> Tu próximo paso</p><h2>Regálale a tus pies<br /><em>un buen día.</em></h2></div><div className="contact-side"><p>Agenda tu evaluación con <strong>Joselin E. Guevara Roca</strong>, Podóloga Especialista.</p><a className="primary-btn light-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowUpRight size={18} /></a><div className="contact-meta"><a href={mapsUrl} target="_blank" rel="noreferrer" className="map-link"><span><MapPin size={17} /> Calle Porta 170, Oficina 301<br />Miraflores</span></a><span><Clock3 size={17} /> Lun — Sáb<br />10:00 AM — 7:00 PM</span></div></div></section>
      </main>
      <footer><a className="brand" href="#inicio"><span className="brand-mark"><img src="/brand/logo.jpeg" alt="" /></span><span><strong>JOSSY</strong><b>TOES</b></span></a><p>Centro Podológico · Miraflores</p><div className="social-links"><a className="social whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><FaWhatsapp /></a><a className="social facebook" href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FaFacebookF /></a><a className="social tiktok" href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok"><FaTiktok /></a></div><a href={whatsappUrl} target="_blank" rel="noreferrer">933 447 780</a></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" title="Contactar por WhatsApp"><img src="/icons/icono.jpeg" alt="WhatsApp" /></a>
    </div>
  )
}

export default App
