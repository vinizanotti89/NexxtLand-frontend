'use client'
import FooterLogin from "@/components/Footerogin";
import { CopyrightLogin } from "@/components/Footerogin/Copyright";
import { HeaderLogin } from "@/components/HeaderLogin";
import { MenuHamburguer } from "@/components/Partials/MenuHamburguer";
import { Toaster } from "react-hot-toast";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <HeaderLogin  />
        {children}
        <MenuHamburguer />
        <CopyrightLogin />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
      </body>
    </html>
  );
}


