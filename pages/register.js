import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useSession, signIn, signOut } from "next-auth/react";

function Register() {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="flex flex-col max-w-screen-2xl min-h-screen relative  mx-auto overflow-hidden">
        {session ? (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Register;
