import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PitVoxPartnerProvider } from '@pitvox/partner-react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* ──────────────────────────────────────────────────────────────
           TODO: Replace "your-slug" with your PitVox partner slug.
           You can get your slug and API key from your PitVox partner dashboard.
           ────────────────────────────────────────────────────────────── */}
      <PitVoxPartnerProvider
        partnerSlug="your-slug"
        apiKey=""
        getSteamId={() => null}
      >
        <App />
      </PitVoxPartnerProvider>
    </BrowserRouter>
  </StrictMode>,
)
