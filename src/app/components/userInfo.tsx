'use client'
import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };
const name = session?.user.name;
  return (
    <div className="flex h-[75vh] flex-col items-center justify-start">
      <div className="my-10 shadow-lg p-8 bg-zince-300/10 flex flex-col justify-center items-start gap-3">
        <div>
          name: <span className="text-blue-500">{name}</span>
        </div>
        <div>
          Email: <span className="text-blue-500">{session?.user.email}</span>
        </div>
        {session ? (
          <button onClick={handleSignOut} className="bg-red-500 text-white font-bold px-6 py-3 mt-3 rounded-lg">
            Logout
          </button>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
}
