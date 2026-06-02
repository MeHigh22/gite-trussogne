import { useState, useEffect } from 'react';

export const ELLOHA_URL = 'https://reservation.elloha.com/?idPublication=854566e1-2fb8-485c-abbd-fbf732e92e88&idoi=fcd24dc1-911a-41a4-a5cd-c8588ad41007&TypeOi=3&searchFirstAvailableDates=1&culture=fr-FR';

function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (window.innerWidth <= 600) return 'mobile';
    if (window.innerWidth <= 900) return 'tablet';
    return 'desktop';
  });
  useEffect(() => {
    const fn = () => {
      if (window.innerWidth <= 600) setBp('mobile');
      else if (window.innerWidth <= 900) setBp('tablet');
      else setBp('desktop');
    };
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return bp;
}

const MAX = 9;

const fmt = (d) => d.toISOString().slice(0, 10);

const fmtEllo = (d) => {
  const [y, m, day] = d.toISOString().slice(0, 10).split('-');
  return `${day}/${m}/${y}`;
};

export function buildEllohaUrl({ arrival, nights, adults, kids }) {
  const departure = new Date(arrival);
  departure.setDate(departure.getDate() + nights);
  const params = new URLSearchParams({
    idPublication: '854566e1-2fb8-485c-abbd-fbf732e92e88',
    idoi: 'fcd24dc1-911a-41a4-a5cd-c8588ad41007',
    TypeOi: '3',
    searchFirstAvailableDates: '1',
    dateFrom: fmtEllo(new Date(arrival)),
    dateTo: fmtEllo(departure),
    NbAdultes: adults,
    NbEnfants: kids,
    culture: 'fr-FR',
  });
  return 'https://reservation.elloha.com/?' + params.toString();
}

export default function BookingWidget({ wrapperStyle = {}, fullWidth = false }) {
  const bp = useBreakpoint();
  const today = new Date();

  const [arrival, setArrival] = useState(fmt(today));
  const [nights, setNights] = useState(2);
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  const total = adults + kids;

  const handleVerify = () => {
    window.open(buildEllohaUrl({ arrival, nights, adults, kids }), '_blank', 'noopener noreferrer');
  };

  const counterBtn = (disabled) => ({
    width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--line)',
    background: 'transparent', cursor: disabled ? 'default' : 'pointer', fontSize: 16,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--ink)', opacity: disabled ? 0.3 : 1,
  });
  const seg = (extra = {}) => ({ padding: '14px 24px', display: 'flex', flexDirection: 'column', gap: 4, ...extra });
  const dateInput = { fontSize: 14, border: 'none', background: 'transparent', color: 'var(--ink)', outline: 'none', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none' };

  if (bp === 'mobile') {
    return (
      <div style={wrapperStyle}>
        <div style={{ background: 'var(--paper)', borderRadius: 16, boxShadow: '0 20px 60px -20px rgba(31,58,24,0.25)', border: '1px solid var(--line)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            <div style={seg({ borderRight: '1px solid var(--line)' })}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Arrivée</div>
              <input type="date" value={arrival} min={fmt(today)} onChange={(e) => setArrival(e.target.value)} style={{ ...dateInput, fontSize: 13, width: '100%' }} />
            </div>
            <div style={seg()}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Nuits</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button style={counterBtn(nights <= 1)} onClick={() => setNights(Math.max(1, nights - 1))}>−</button>
                <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{nights}</span>
                <button style={counterBtn(false)} onClick={() => setNights(nights + 1)}>+</button>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--line)' }}>
            <div style={seg({ borderRight: '1px solid var(--line)' })}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Adultes</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button style={counterBtn(adults <= 1)} onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
                <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{adults}</span>
                <button style={counterBtn(total >= MAX)} onClick={() => total < MAX && setAdults(adults + 1)}>+</button>
              </div>
            </div>
            <div style={seg()}>
              <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Enfants</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button style={counterBtn(kids <= 0)} onClick={() => setKids(Math.max(0, kids - 1))}>−</button>
                <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{kids}</span>
                <button style={counterBtn(total >= MAX)} onClick={() => total < MAX && setKids(kids + 1)}>+</button>
              </div>
            </div>
          </div>
          <div style={{ padding: 12 }}>
            <button onClick={handleVerify} className="btn-primary" style={{ width: '100%', borderRadius: 100, padding: '14px', fontSize: 14, textAlign: 'center' }}>
              Vérifier les disponibilités →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: fullWidth ? 'stretch' : 'center', gap: 12, ...wrapperStyle }}>
      <div style={{ background: 'var(--paper)', borderRadius: 100, boxShadow: '0 20px 60px -20px rgba(31,58,24,0.25)', display: 'flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', padding: 8, border: '1px solid var(--line)' }}>
        <div style={seg({ borderRight: '1px solid var(--line)', flex: fullWidth ? 1 : undefined })}>
          <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Arrivée</div>
          <input type="date" value={arrival} min={fmt(today)} onChange={(e) => setArrival(e.target.value)} style={dateInput} />
        </div>
        <div style={seg({ borderRight: '1px solid var(--line)', flex: fullWidth ? 1 : undefined })}>
          <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Nuits</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={counterBtn(nights <= 1)} onClick={() => setNights(Math.max(1, nights - 1))}>−</button>
            <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{nights}</span>
            <button style={counterBtn(false)} onClick={() => setNights(nights + 1)}>+</button>
          </div>
        </div>
        <div style={seg({ borderRight: '1px solid var(--line)', flex: fullWidth ? 1 : undefined })}>
          <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Adultes</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={counterBtn(adults <= 1)} onClick={() => setAdults(Math.max(1, adults - 1))}>−</button>
            <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{adults}</span>
            <button style={counterBtn(total >= MAX)} onClick={() => total < MAX && setAdults(adults + 1)}>+</button>
          </div>
        </div>
        <div style={seg({ borderRight: '1px solid var(--line)', flex: fullWidth ? 1 : undefined })}>
          <div className="mono-label" style={{ color: 'var(--ink-soft)' }}>Enfants</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={counterBtn(kids <= 0)} onClick={() => setKids(Math.max(0, kids - 1))}>−</button>
            <span style={{ fontSize: 15, minWidth: 18, textAlign: 'center' }}>{kids}</span>
            <button style={counterBtn(total >= MAX)} onClick={() => total < MAX && setKids(kids + 1)}>+</button>
          </div>
        </div>
        <div style={{ padding: 8 }}>
          <button onClick={handleVerify} className="btn-primary" style={{ whiteSpace: 'nowrap', borderRadius: 100, padding: '14px 22px', fontSize: 13 }}>
            Vérifier les disponibilités →
          </button>
        </div>
      </div>
    </div>
  );
}
