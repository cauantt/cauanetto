// RootLayout.js
import "./globals.css";

export const metadata = {
  title: "My Resume",
  description: "A summary of my skills, experiences, and professional achievements, designed to highlight my profile for future opportunities.",
};

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-archivo">{children}</body>
    </html>
  );
}
