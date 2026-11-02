export default function Loading() {
  return (
    <main className="page-loading" aria-label="Loading page" role="status">
      <div className="loading-mark">VS</div>
      <div className="loading-track">
        <span />
      </div>
      <p>Loading portfolio</p>
    </main>
  );
}
