const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://dummyjson.com';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: { title: string; department: string };
}

export async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error(`API returned ${res.status}`);
  return res.json() as Promise<User>;
}
