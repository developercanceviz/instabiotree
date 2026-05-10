'use client';

import Image from 'next/image';

/* ─── Nav Links ──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  {
    icon: '🔥',
    title: 'HAFTANIN KAMPANYASI',
    sub: 'Kaçırılmayacak Fırsatlar',
    href: 'https://cancevizhurma.com/cennet-hurmasi-kampanyasi-2li-paket',
    badge: 'İNDİRİMDE',
  },
  {
    icon: '⭐',
    title: 'ÇOK SATANLAR',
    sub: 'En Çok Tercih Edilen Ürünler',
    href: 'https://cancevizhurma.com/acilisa-ozel',
  },
  {
    icon: '📦',
    title: 'TÜM ÜRÜNLER',
    sub: 'Tüm Hurma Çeşitlerini Keşfet',
    href: 'https://cancevizhurma.com/',
  },
  {
    icon: '📍',
    title: 'MAĞAZA / KONUM',
    sub: 'Mağazamıza Ulaşın',
    href: 'https://share.google/F5ezbaofD7Pm4tnOZ',
  },
  {
    icon: '🤝',
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
      `}</style>

      {/* ── Page Shell ── */}
      <div style={{
        minHeight: '100dvh',
        width: '100%',
        background: '#0a0400',
        backgroundImage: `
          radial-gradient(circle at 50% 15%, rgba(180, 110, 20, 0.25) 0%, transparent 40%),
          radial-gradient(circle at 50% 40%, rgba(120, 50, 5, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 10% 10%, rgba(100, 40, 5, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 90% 10%, rgba(100, 40, 5, 0.1) 0%, transparent 30%)
        `,
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
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {[
              { icon: '👥', value: '200.000+', label: 'Mutlu Müşteri' },
              { icon: '🚚', value: '81 İLE',   label: 'Ücretsiz Kargo' },
              { icon: '🛡️', value: 'KOŞULSUZ', label: 'İade Garantisi' },
            ].map(({ icon, value, label }) => (
              <div key={label} style={{
                flex: 1,
                background: 'rgba(255,255,255,0.035)',
                border: '1px solid rgba(200,144,42,0.32)',
                borderRadius: 12,
                padding: '10px 6px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                backdropFilter: 'blur(6px)',
              }}>
                <span style={{ fontSize: 22, lineHeight: 1 }}>{icon}</span>
                <span style={{
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: '#f2cb55',
                  letterSpacing: '0.01em',
                  textAlign: 'center',
                  lineHeight: 1.15,
                }}>{value}</span>
                <span style={{
                  fontSize: 9.5,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.55)',
                  textAlign: 'center',
                  letterSpacing: '0.03em',
                }}>{label}</span>
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
              gap: 10,
              background: 'linear-gradient(90deg, #b86800 0%, #d98b10 20%, #f5c030 50%, #d98b10 80%, #b86800 100%)',
              borderRadius: 50,
              padding: '0 14px 0 8px',
              height: 70,
              textDecoration: 'none',
              marginBottom: 20,
              boxShadow: '0 6px 36px rgba(200,110,0,0.55), inset 0 1px 0 rgba(255,255,255,0.2)',
              transition: 'filter 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* shimmer overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 55%)',
              borderRadius: 50,
              pointerEvents: 'none',
            }} />

            {/* Cart icon bubble */}
            <div style={{
              width: 54,
              height: 54,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>

            {/* Text */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <span style={{
                fontSize: 22,
                fontWeight: 900,
                color: '#1a0700',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                textShadow: '0 1px 0 rgba(255,255,255,0.2)',
              }}>ALIŞVERİŞE BAŞLA</span>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'rgba(26,7,0,0.70)',
                letterSpacing: '0.03em',
              }}>En Taze &amp; En Lezzetli Hurma Çeşitleri</span>
            </div>

            {/* Arrow bubble */}
            <div style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a0700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                  background: 'rgba(255,255,255,0.028)',
                  border: '1px solid rgba(180,120,30,0.30)',
                  borderRadius: 14,
                  padding: '12px 14px',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'rgba(30,12,0,0.70)',
                  border: '1.5px solid rgba(180,120,30,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                }}>
                  {icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: '#f0c040',
                    letterSpacing: '0.06em',
                    lineHeight: 1.2,
                    fontFamily: 'Arial, sans-serif',
                  }}>{title}</span>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.52)',
                    letterSpacing: '0.02em',
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(200,144,42,0.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{
                fontSize: 28,
                lineHeight: 1,
                filter: 'drop-shadow(0 0 6px rgba(200,144,42,0.5))',
              }}>⏰</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#f0c040',
                  letterSpacing: '0.06em',
                  lineHeight: 1.2,
                }}>BUGÜNE ÖZEL FİYATLAR</span>
                <span style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.48)',
                }}>Stoklar tükenmeden al!</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              width: 1,
              height: 40,
              background: 'rgba(200,144,42,0.35)',
              margin: '0 14px',
              flexShrink: 0,
            }} />

            {/* Right */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{
                fontSize: 28,
                lineHeight: 1,
                filter: 'drop-shadow(0 0 6px rgba(200,144,42,0.5))',
              }}>🎁</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: '#f0c040',
                  letterSpacing: '0.06em',
                  lineHeight: 1.2,
                }}>HER SİPARİŞE ÖZEL</span>
                <span style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.48)',
                }}>Hediyeler &amp; sürpriz fırsatlar</span>
              </div>
            </div>
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
