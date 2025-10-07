"use client";
import { useGetUsersQuery } from "@/store/api/authApi";

export default function UsersPage() {
  const { data, isLoading, error } = useGetUsersQuery(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users 😢</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {data?.users?.map((user: any) => (
          <li key={user.id} className="border p-3 rounded">
            {user.firstName} {user.lastName} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
