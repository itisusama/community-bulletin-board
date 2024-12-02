import "../styles/globals.css";

export const metadata = {
  title: "communit-bulletin-board",
  description: "post your idea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
