import "./globals.css";
import Header from '../components/Header'

export const metadata = {
  title: "Job Posting with Filterting App",
  description: "Made by Thu Smiley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/images/eyecam-co.svg" />
        <meta property="og:image" content="/images/desktop-preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
