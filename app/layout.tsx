"use client";
import AppHeader from "@/src/components/AppHeader/AppHeader";
import { db, initFirebase } from "@/src/database/initialize";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "./globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  initFirebase();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <html lang="ja">
          <body className="w-screen min-h-screen bg-bg">
            <AppHeader />
            <main className="container m-auto p-8">{children}</main>
          </body>
        </html>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
