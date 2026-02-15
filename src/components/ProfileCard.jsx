export function ProfileCard() {
  return (
    <aside className="leftColumn">
      <header className="leftHeader">
        <h1 className="siteTitle">Code Learning</h1>
        <p className="siteSubtitle">Small shipped experiments, building toward a portfolio.</p>
      </header>

      <div className="card">
        <div className="profileRow">
          <div>
            <div className="profileName">Franck Hoffmann</div>
            <div className="profileMeta">Director of Product Design</div>
            <div className="profileMeta">Tekmetric</div>
          </div>

          <div className="iconButton" aria-label="LinkedIn">
            in
          </div>
        </div>

        <div className="pillRow">
          <span className="pill">v1</span>
          <span className="pillText">Deployed via GitHub Pages</span>
        </div>
      </div>
    </aside>
  );
}
