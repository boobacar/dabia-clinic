export default function SectionWave({ flip=false, className='' }) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{display:'block', width:'100%', height:'40px', transform: flip? 'scaleY(-1)': 'none'}}>
        <defs>
          <linearGradient id="dabiaWave" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ad9d64" />
            <stop offset="100%" stopColor="#bb2988" />
          </linearGradient>
        </defs>
        <path d="M0,40 C300,80 400,0 720,40 C1040,80 1160,0 1440,40 L1440,80 L0,80 Z" fill="url(#dabiaWave)" fillOpacity="0.12"/>
      </svg>
    </div>
  );
}

