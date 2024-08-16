import { auth } from '@/services/auth';

export default async function Page() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <h1>Settings</h1>
    </main>
  );
}
