//import './globals.css'
// "use client"
// import { ChakraBaseProvider } from "@chakra-ui/react"
// import {Heading} from "@chakra-ui/react";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <ChakraBaseProvider> */}
       
          {children}
        {/* </ChakraBaseProvider> */}
        </body>
    </html>
  )
}