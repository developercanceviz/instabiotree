'use client';

import Image from 'next/image';

const SHOPPING_LINKS: { emoji: string; label: string; href: string; highlight?: boolean }[] = [
  { emoji: '🔥', label: 'Haftanın Kampanyası', href: 'https://cancevizhurma.com/cennet-hurmasi-kampanyasi-2li-paket' },
  { emoji: '⭐', label: 'Çok Satanlar', href: 'https://cancevizhurma.com/acilisa-ozel' },
  { emoji: '📍', label: 'Konum / Mağaza', href: 'https://share.google/F5ezbaofD7Pm4tnOZ' },
  { emoji: '📦', label: 'Toptan Satış', href: 'https://cancevizhurma.com/pages/iletisim' },
  { emoji: '🛒', label: 'Tüm Ürünler', href: 'https://cancevizhurma.com/' },
  { emoji: '✨', label: 'Fırsat Ürünleri', href: 'https://cancevizhurma.com/acilisa-ozel', highlight: true },
];

const SUPPORT_LINKS = [
  { icon: 'local_shipping', label: 'Sipariş Takip', href: 'https://cancevizhurma.com/pages/siparis-takip' },
  { icon: 'support_agent', label: 'WhatsApp Destek', href: 'https://wa.me/905535229895' },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(245,189,106,0.5)', flexShrink: 0, transition: 'color 0.2s' }}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function LinkCard({ children, href, highlight }: { children: React.ReactNode; href: string; highlight?: boolean }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        height: 56,
        borderRadius: 8,
        background: highlight ? 'rgba(245,189,106,0.05)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${highlight ? 'rgba(245,189,106,0.6)' : 'rgba(245,189,106,0.3)'}`,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        textDecoration: 'none',
        width: '100%',
        transition: 'all 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = 'rgba(255,255,255,0.08)';
        el.style.borderColor = 'rgba(245,189,106,0.6)';
        el.style.boxShadow = '0 0 15px rgba(245,189,106,0.1)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.background = highlight ? 'rgba(245,189,106,0.05)' : 'rgba(255,255,255,0.03)';
        el.style.borderColor = highlight ? 'rgba(245,189,106,0.6)' : 'rgba(245,189,106,0.3)';
        el.style.boxShadow = 'none';
      }}
    >
      {children}
    </a>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      border: '1px solid rgba(245,189,106,0.4)',
      background: 'rgba(245,189,106,0.05)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginRight: 16, flexShrink: 0, fontSize: 14,
    }}>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', margin: '2rem 0',
      color: 'rgba(245,189,106,0.3)',
    }}>
      <div style={{ flex: 1, borderBottom: '1px solid rgba(245,189,106,0.3)' }} />
      <div style={{
        width: 8, height: 8, transform: 'rotate(45deg)',
        border: '1px solid rgba(245,189,106,0.3)',
        margin: '0 8px', background: 'rgba(245,189,106,0.1)',
      }} />
      <div style={{ flex: 1, borderBottom: '1px solid rgba(245,189,106,0.3)' }} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-jost), sans-serif',
      fontSize: 12, fontWeight: 600, letterSpacing: '0.2em',
      color: '#f5bd6a', textTransform: 'uppercase',
      textAlign: 'center', marginBottom: 8,
    }}>
      {children}
    </h2>
  );
}

function LinkLabel({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <span style={{
      fontFamily: 'var(--font-jost), sans-serif',
      fontSize: 16, fontWeight: 400, lineHeight: 1.6,
      color: highlight ? '#f5bd6a' : '#fddccc',
      flex: 1,
    }}>
      {children}
    </span>
  );
}

export default function BioPage() {
  return (
    <div style={{
      minHeight: '100dvh',
      backgroundColor: '#2C1206',
      backgroundImage: `radial-gradient(circle at 50% 10%, rgba(184,135,58,0.15) 0%, rgba(44,18,6,0) 50%), url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5bd6a' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      display: 'flex', justifyContent: 'center',
      paddingBottom: 32,
    }}>
      <main style={{
        width: '100%', maxWidth: 420,
        padding: '24px 24px 0',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}>

        {/* Profile Header */}
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 12 }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'rgba(245,189,106,0.2)',
              filter: 'blur(12px)', transform: 'scale(1.1)',
            }} />
            <Image
              src="/logo.jpeg"
              alt="Canceviz Hurma"
              width={80} height={80}
              style={{
                borderRadius: '50%', objectFit: 'cover',
                border: '2px solid rgba(245,189,106,0.5)',
                position: 'relative', zIndex: 1,
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            />
          </div>
          <h1 style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 24, fontWeight: 500, lineHeight: 1.4,
            color: '#fddccc', marginBottom: 4, textAlign: 'center',
          }}>
            Canceviz Hurma
          </h1>
          <p style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
            color: 'rgba(245,189,106,0.8)', marginBottom: 12, textAlign: 'center',
          }}>
            Doğanın En Tatlı Hediyesi 🌴
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { href: 'https://www.instagram.com/canceviz_hurma', label: 'Instagram', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              )},
              { href: 'https://wa.me/905535229895', label: 'WhatsApp', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )},
              { href: 'https://www.youtube.com/@Cancevizhurma', label: 'YouTube', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )},
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(245,189,106,0.3)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#f5bd6a', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </header>

        {/* Trust Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(245,189,106,0.3)',
            backdropFilter: 'blur(12px)',
            borderRadius: 999, padding: '8px 16px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ color: '#f5bd6a', fontSize: 14 }}>✓</span>
            <span style={{
              fontFamily: 'var(--font-jost), sans-serif',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.05em',
              color: 'rgba(245,189,106,0.9)',
            }}>
              100.000+ Mutlu Müşteri · Ücretsiz Kargo
            </span>
          </div>
        </div>

        {/* ALIŞVERİŞ */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <SectionTitle>🛍 ALIŞVERİŞ</SectionTitle>
          {SHOPPING_LINKS.map(({ emoji, label, href, highlight }) => (
            <LinkCard key={label} href={href} highlight={highlight}>
              <IconCircle>{emoji}</IconCircle>
              <LinkLabel highlight={highlight}>{label}</LinkLabel>
              <ArrowIcon />
            </LinkCard>
          ))}
        </section>

        <Divider />

        {/* SİPARİŞ & DESTEK */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <SectionTitle>📦 SİPARİŞ &amp; DESTEK</SectionTitle>
          {SUPPORT_LINKS.map(({ label, href }) => (
            <LinkCard key={label} href={href}>
              <IconCircle>
                {label === 'Sipariş Takip' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(245,189,106,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(245,189,106,0.8)' }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )}
              </IconCircle>
              <LinkLabel>{label}</LinkLabel>
              <ArrowIcon />
            </LinkCard>
          ))}
        </section>

        <Divider />

        {/* İŞ BİRLİĞİ */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
          <SectionTitle>🤝 İŞ BİRLİĞİ</SectionTitle>
          <LinkCard href="https://basvuru.cancevizhurma.com/basvuru-form.html" highlight>
            <IconCircle>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5bd6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </IconCircle>
            <LinkLabel highlight>İçerik Üretici Başvurusu</LinkLabel>
            <ArrowIcon />
          </LinkCard>
        </section>

        {/* Footer */}
        <footer style={{
          marginTop: 'auto', display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 8, opacity: 0.6, paddingBottom: 24,
        }}>
          <p style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(245,189,106,0.8)',
          }}>
            © Canceviz Hurma
          </p>
          <a href="https://www.cancevizhurma.com" style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'rgba(245,189,106,0.6)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}>
            cancevizhurma.com
          </a>
        </footer>
      </main>
    </div>
  );
}
