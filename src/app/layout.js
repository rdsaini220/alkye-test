import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import { AuthProvider } from "@/contexts/AuthContext";
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })
import "./globals.css";
 
const myFont = localFont({
  src: [
    {
      path: './fonts/test-soehne-fett.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/test-soehne-halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/test-soehne-dreiviertelfett.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/test-soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/test-soehne-leicht.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "Alkye Test App",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <AuthProvider>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
