import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Damacrest School",
  description: "The Best of Holistic Learning - A modern educational institution",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
