import { useEffect, useState } from 'react';
import { fetchUser, type User } from './api';
import { ProfileCard } from './ProfileCard';

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUser(1).then(setUser, (e: Error) => setError(e.message));
  }, []);

  return (
    <main className="page">
      <h1>User Profile</h1>
      {error && <p className="error">Could not load user: {error}</p>}
      {!user && !error && <p>Loading...</p>}
      {user && <ProfileCard user={user} />}
    </main>
  );
}
