'use client';

import Image from 'next/image';

/* ─── Nav Links ──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>,
    title: 'HAFTANIN KAMPANYASI',
    sub: 'Kaçırılmayacak Fırsatlar',
    href: 'https://cancevizhurma.com/cennet-hurmasi-kampanyasi-2li-paket',
    badge: 'İNDİRİMDE',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    title: 'ÇOK SATANLAR',
    sub: 'En Çok Tercih Edilen Ürünler',
    href: 'https://cancevizhurma.com/acilisa-ozel',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    title: 'TÜM ÜRÜNLER',
    sub: 'Tüm Hurma Çeşitlerini Keşfet',
    href: 'https://cancevizhurma.com/',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    title: 'MAĞAZA / KONUM',
    sub: 'Mağazamıza Ulaşın',
    href: 'https://share.google/F5ezbaofD7Pm4tnOZ',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 640 512" fill="#f0c040"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>,
    title: 'TOPTAN SATIŞ',
    sub: 'Bayilik ve Toptan Sipariş',
    href: 'https://cancevizhurma.com/pages/iletisim',
  },
];

/* ─── Icons ──────────────────────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function BioPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          width: 100%;
          overflow-x: hidden;
          background: #0e0500;
        }

        /* Smooth hover with CSS — no JS needed */
        .nav-link:hover  { background: rgba(200,144,42,0.09) !important; border-color: rgba(200,144,42,0.5) !important; }
        .cta-btn:hover   { filter: brightness(1.1); box-shadow: 0 10px 50px rgba(210,130,0,0.65) !important; }
        .social-a:hover  { color: #f0c660 !important; }
        .social-a:hover .soc-ring { border-color: rgba(200,144,42,0.8) !important; background: rgba(200,144,42,0.12) !important; }
        .footer-a:hover  { color: #f0c660 !important; }
        .promo-link:hover span { filter: brightness(1.3); }
      `}</style>

      {/* ── Page Shell ── */}
      <div style={{
        minHeight: '100dvh',
        width: '100%',
        backgroundColor: '#0a0400',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 48,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <main style={{
          width: '100%',
          maxWidth: 440,
          padding: '32px 20px 0',
          display: 'flex',
          flexDirection: 'column',
        }}>

          {/* ────────────────── HEADER ────────────────── */}
          <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>

            {/* Logo */}
            <div style={{ position: 'relative', marginBottom: 16 }}>
              {/* outer glow */}
              <div style={{
                position: 'absolute',
                inset: -16,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,140,20,0.40) 0%, transparent 70%)',
                filter: 'blur(14px)',
              }} />
              {/* ring */}
              <div style={{
                position: 'relative',
                width: 108,
                height: 108,
                borderRadius: '50%',
                padding: 3,
                background: 'linear-gradient(135deg, #d4960e, #f5c842, #c17a0a)',
                boxShadow: '0 0 0 3px rgba(200,140,20,0.2), 0 12px 40px rgba(0,0,0,0.7)',
              }}>
                <Image
                  src="/logo.jpeg"
                  alt="Canceviz Hurma"
                  width={102}
                  height={102}
                  priority
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    background: '#fff',
                  }}
                />
              </div>
            </div>

            {/* Brand Name */}
            <h1 style={{
              fontSize: 36,
              fontWeight: 900,
              letterSpacing: '0.05em',
              lineHeight: 1,
              textAlign: 'center',
              marginBottom: 8,
              fontFamily: 'Georgia, "Times New Roman", serif',
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}>
              <span style={{ color: '#ffffff' }}>CANCEVİZ </span>
              <span style={{ color: '#e9a820' }}>HURMA</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'rgba(235,185,65,0.90)',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
              Türkiye&apos;nin Hurma Adresi
            </p>
          </header>

          {/* ────────────────── TRUST BAR ────────────────── */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
            {[
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, value: '200.000+', label: 'Mutlu Müşteri' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>, value: '81 İLE',   label: 'Ücretsiz Kargo' },
              { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>, value: 'KOŞULSUZ', label: 'İade Garantisi' },
            ].map(({ icon, value, label }) => (
              <div key={label} style={{
                flex: 1,
                background: 'rgba(15, 6, 0, 0.5)',
                border: '1px solid rgba(220, 160, 50, 0.4)',
                borderRadius: 24,
                padding: '8px 4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#f5c842',
                    letterSpacing: '0.01em',
                    lineHeight: 1,
                  }}>{value}</span>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.01em',
                  }}>{label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ────────────────── CTA BUTTON ────────────────── */}
          <a
            href="https://cancevizhurma.com/"
            className="cta-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(90deg, #b86800 0%, #f5c030 50%, #b86800 100%)',
              borderRadius: 50,
              padding: '6px 6px 6px 20px',
              height: 76,
              textDecoration: 'none',
              marginBottom: 24,
              boxShadow: '0 0 30px rgba(240, 165, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* shimmer overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
              borderRadius: 50,
              pointerEvents: 'none',
            }} />

            {/* Left: Cart Icon & Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                <circle cx="9" cy="21" r="1.5" fill="#fff" stroke="none"></circle>
                <circle cx="20" cy="21" r="1.5" fill="#fff" stroke="none"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>ALIŞVERİŞE BAŞLA</span>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                }}>En Taze &amp; En Lezzetli Hurma Çeşitleri</span>
              </div>
            </div>

            {/* Right: Arrow circle */}
            <div style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b86800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </div>
          </a>

          {/* ────────────────── NAV LINKS ────────────────── */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
            {NAV_LINKS.map(({ icon, title, sub, href, badge }) => (
              <a
                key={title}
                href={href}
                className="nav-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: 'rgba(15, 6, 0, 0.65)',
                  border: '1px solid rgba(220,160,50,0.4)',
                  borderRadius: 14,
                  padding: '12px 14px',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  flexShrink: 0,
                }}>
                  {icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: '#f5c842',
                    letterSpacing: '0.04em',
                    lineHeight: 1.2,
                    fontFamily: 'Arial, sans-serif',
                  }}>{title}</span>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.01em',
                  }}>{sub}</span>
                </div>

                {/* Badge */}
                {badge && (
                  <span style={{
                    background: '#c0392b',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    padding: '4px 9px',
                    borderRadius: 20,
                    flexShrink: 0,
                    textTransform: 'uppercase',
                  }}>{badge}</span>
                )}

                {/* Chevron */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </a>
            ))}
          </nav>

          {/* ────────────────── PROMO BAR ────────────────── */}
          <div style={{
            border: '1.5px dashed rgba(200,144,42,0.42)',
            borderRadius: 14,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(200,144,42,0.035)',
            marginBottom: 24,
            gap: 0,
          }}>
            {/* Left */}
            <a href="https://cancevizhurma.com/" className="promo-link" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ filter: 'drop-shadow(0 0 6px rgba(200,144,42,0.5))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#f0c040',
                  letterSpacing: '0.06em',
                  lineHeight: 1.2,
                  transition: 'color 0.2s',
                }}>BUGÜNE ÖZEL FİYATLAR</span>
                <span style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.48)',
                  transition: 'color 0.2s',
                }}>Stoklar tükenmeden al!</span>
              </div>
            </a>

            {/* Divider */}
            <div style={{
              width: 1,
              height: 40,
              background: 'rgba(200,144,42,0.35)',
              margin: '0 14px',
              flexShrink: 0,
            }} />

            {/* Right */}
            <a href="https://cancevizhurma.com/" className="promo-link" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', cursor: 'pointer' }}>
              <div style={{ filter: 'drop-shadow(0 0 6px rgba(200,144,42,0.5))' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f0c040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#f0c040',
                  letterSpacing: '0.06em',
                  lineHeight: 1.2,
                  transition: 'color 0.2s',
                }}>HER SİPARİŞE ÖZEL</span>
                <span style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.48)',
                  transition: 'color 0.2s',
                }}>Hediyeler &amp; sürpriz fırsatlar</span>
              </div>
            </a>
          </div>

          {/* ────────────────── SOCIAL LINKS ────────────────── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 14 }}>
            {[
              { href: 'https://www.instagram.com/canceviz_hurma', label: 'INSTAGRAM', Icon: InstagramIcon },
              { href: 'https://wa.me/905535229895',               label: 'WHATSAPP',  Icon: WhatsAppIcon },
              { href: 'https://www.youtube.com/@Cancevizhurma',   label: 'YOUTUBE',   Icon: YouTubeIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="social-a"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.60)',
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.09em',
                  transition: 'color 0.2s',
                }}
              >
                <div
                  className="soc-ring"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(180,120,30,0.38)',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                >
                  <Icon />
                </div>
                {label}
              </a>
            ))}
          </div>

          {/* ────────────────── FOOTER URL ────────────────── */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 8 }}>
            <a
              href="https://www.cancevizhurma.com"
              className="footer-a"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                textDecoration: 'none',
                color: 'rgba(200,144,42,0.75)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
            >
              <GlobeIcon />
              cancevizhurma.com
            </a>
          </div>

        </main>
      </div>
    </>
  );
}
