function Statistik() {
  return (
    <div className="m-2">
      <div className="stats shadow bg-neutral-content">
      <div className="stat">
          <div className="stat-figure text-primary">
          </div>
          <div className="stat-title">Total EDC</div>
          <div className="stat-value text-primary">1481</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-title">Belum Terpasang</div>
          <div className="stat-value text-secondary">500</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-title">Sudah Terpasang</div>
          <div className="stat-value text-accent">981</div>
        </div>
      </div>
    </div>
  );
}

export default Statistik;
