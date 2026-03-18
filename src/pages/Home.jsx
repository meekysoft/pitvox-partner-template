import { Link } from 'react-router-dom'
import { useCompetitions, useLeaderboardIndex } from '@pitvox/partner-react'

export default function Home() {
  const { data: competitions } = useCompetitions()
  const { data: tracks } = useLeaderboardIndex()

  const activeCount = competitions?.filter((c) => c.status === 'active').length ?? 0
  const trackCount = tracks?.length ?? 0

  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          My Racing Community
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Sim racing competitions, leaderboards, and more — powered by PitVox.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/competitions"
          className="group block rounded-xl border border-gray-800 bg-gray-900 p-8 hover:border-indigo-500/50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
            Competitions
          </h2>
          <p className="text-gray-400">
            {activeCount > 0
              ? `${activeCount} active competition${activeCount !== 1 ? 's' : ''}`
              : 'View our championship series'}
          </p>
        </Link>

        <Link
          to="/leaderboards"
          className="group block rounded-xl border border-gray-800 bg-gray-900 p-8 hover:border-indigo-500/50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
            Leaderboards
          </h2>
          <p className="text-gray-400">
            {trackCount > 0
              ? `${trackCount} track${trackCount !== 1 ? 's' : ''} with hotlap records`
              : 'Compete for the fastest lap times'}
          </p>
        </Link>
      </div>
    </div>
  )
}
