import "./globals.css";

export const metadata = {
  title: "Sanskariezzzz | Portfolio",
  description: "Portfolio Website of Sanskariezzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cursor-none">
        {children}
      </body>
    </html>
  );
}
