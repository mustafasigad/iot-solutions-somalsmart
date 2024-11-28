// src/app/layout.js
import '../styles/globals.css'

export const metadata = {
  title: 'IoT Solutions',
  description: 'Smart IoT Solutions for Modern Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}