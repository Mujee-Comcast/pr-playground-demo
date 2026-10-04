import type { User } from './api';

export function ProfileCard({ user }: { user: User }) {
  return (
    <section className="card">
      <img src={user.image} alt="" width={64} height={64} />
      <div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <p>{user.company.title}</p>
        <p className="muted">{user.email}</p>
        <button type="button">Update Profile</button>
      </div>
    </section>
  );
}
