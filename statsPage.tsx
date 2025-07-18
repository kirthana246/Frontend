import * as React from 'react';
import { useEffect, useState } from 'react';
// import { fetchStats } from '../api';

const StatsPage: React.FC = () => {
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    fetchStats().then((res) => setStats(res.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Shortened URL Stats</h2>
      <ul>
        {stats.map((s, idx) => (
          <li key={idx}>
            <p><strong>{s.shortUrl}</strong> ➝ {s.originalUrl}</p>
            <p>Clicks: {s.clicks.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsPage;
export function fetchStats() {
    return fetch('/api/stats')
        .then((response) => response.json())
        .catch((error) => {
        console.error('Error fetching stats:', error);
        throw error;
        });
    }