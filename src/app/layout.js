import "./globals.css";

export const metadata = {
  title: "Terrarium on MPA",
  description: "Smart terrarium created by @c2btx and @undeadpelmen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
