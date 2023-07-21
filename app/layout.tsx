"use client";
import { initFirebase } from "@/src/database/initialize";
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
          <body>{children}</body>
        </html>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
