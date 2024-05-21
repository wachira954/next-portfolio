import './globals.css'

// export const metadata = {
//   title: "Alex",
//   description: 'Welcome to my portfolio!',
//   openGraph: {
//     title: 'Alex',
//     description: 'Welcome to my portfolio!',
//     siteName: 'Alex.dev',
//     images: [
//       {
//         url: "/screenshot.png"
//       }
//     ],
//     locale: 'en-GB',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Alex',
//     description: 'Welcome to my portfolio!',
//     creator: '@Alex',
//     images: ['/screenshot.png'],
//   },
//   category: 'technology',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
