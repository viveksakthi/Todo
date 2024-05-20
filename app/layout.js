import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Todo App",
//   description: "Plan your tasks",
// };

export default function RootLayout({ children, pageTabName }) {
  return (
    <html lang="en">
      <head>
        <title>{"Todo - " + pageTabName}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html> 
  );
}
