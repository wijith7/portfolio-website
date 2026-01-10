import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Wijith Pathiranage | Software Engineer & Data Analyst",
  description: "Portfolio of Wijith Pathiranage, a Software Engineer and Data Analyst based in Australia with expertise in Data Engineering, Full Stack Development, and Data Science.",
  metadataBase: new URL('https://wijith7.github.io/portfolio'),
  keywords: ["Software Engineer", "Data Analyst", "Data Engineer", "Australia", "Portfolio", "Wijith Pathiranage", "React", "Next.js"],
  authors: [{ name: "Wijith Pathiranage" }],
  creator: "Wijith Pathiranage",
  publisher: "Wijith Pathiranage",
  openGraph: {
    title: "Wijith Pathiranage | Software Engineer & Data Analyst",
    description: "Explore the portfolio of Wijith Pathiranage, showcasing projects in Software Engineering, Data Science, and Data Engineering.",
    url: 'https://wijith7.github.io/portfolio',
    siteName: 'Wijith Pathiranage Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile-img.png', // Fallback to profile image if no specific OG image
        width: 800,
        height: 600,
        alt: 'Wijith Pathiranage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wijith Pathiranage | Software Engineer & Data Analyst",
    description: "Software Engineer and Data Analyst based in Australia.",
    images: ['/profile-img.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${outfit.className} ${ovo.className}
        antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
