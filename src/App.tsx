import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { currentTrack, playlistTracks } from './mocks/player'

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <strong>Cylex</strong>
        <span>SpotifyHub</span>
      </header>

      <section className="hero">
        <p className="eyebrow">TOCANDO AGORA</p>
        <img className="cover" src={currentTrack.coverUrl} alt={`Capa de ${currentTrack.title}`} />
        <h1>{currentTrack.title}</h1>
        <p>{currentTrack.artist}</p>

        <div className="controls" aria-label="Controles de reprodução">
          <button aria-label="Faixa anterior"><SkipBack /></button>
          <button className="primary-control" aria-label="Pausar"><Pause /></button>
          <button aria-label="Próxima faixa"><SkipForward /></button>
        </div>

        <div className="progress"><span style={{ width: '42%' }} /></div>
      </section>

      <section className="playlist-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PLAYLIST ATUAL</p>
            <h2>Noite em movimento</h2>
          </div>
          <button className="ghost-button"><Play size={18} /> Reproduzir</button>
        </div>

        <div className="track-grid">
          {playlistTracks.map((track, index) => (
            <article className={index === 0 ? 'track-card active' : 'track-card'} key={track.id}>
              <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
              <img src={track.coverUrl} alt="" />
              <div>
                <h3>{track.title}</h3>
                <p>{track.artist}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
