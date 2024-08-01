// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./(components)/Navbar";
// const inter = Inter({ subsets: ["latin"] });
// import Subnav from "./(components)/Subnav";
// import Bottom from "./(components)/Bottom";
// import { Toaster } from "@/components/ui/toaster"


// export const metadata = {
//   title: "Albanian Rental Tourism",
//   description: "Një platformë inovative ku shitësit ofrojnë makinat e tyre për qira dhe klientët mund të rezervojnë dhe paguajnë lehtësisht. Eksploroni ofertat më të mira për makinat që përshtaten me nevojat tuaja dhe bëni një rezervim të shpejtë dhe të sigurt. Zbuloni një përvojë të jashtëzakonshme në turizmin me qira në Shqipëri dhe shijoni udhëtime të paharrueshme me makinat që dëshironi.",
//   keywords: "qira makina Shqipëri, turizëm me qira, rezervim makine, platformë qiraje, udhëtime Shqipëri",
//   author: "Albanian Rental Tourism Team",
//   robots: "index, follow",
//   og: {
//     title: "Albanian Rental Tourism",
//     description: "Një platformë inovative për qira makinash në Shqipëri. Rezervoni dhe paguani lehtësisht për makinat që përshtaten me nevojat tuaja dhe shijoni udhëtime të paharrueshme.",
//     site_name: "Albanian Rental Tourism"
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Albanian Rental Tourism",
//     description: "Një platformë inovative për qira makinash në Shqipëri. Rezervoni dhe paguani lehtësisht për makinat që përshtaten me nevojat tuaja dhe shijoni udhëtime të paharrueshme.",
    
//   },
//   favicon: "/logo.png" // Make sure to replace this with the actual path to your favicon file
// };
// export default function RootLayout({ children }) {


  
 


//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="fixed top-0 left-0 right-0 bg-[#F7F7F7]  z-[10000]">
//         <Subnav/>
//         <Navbar/>
//         </div>
//         <div className="pt-[8%] bg-[#F7F7F7]  min-h-[90vh]">{children}</div>
//         <Bottom/>
//         <Toaster />
//         <script src="https://www.paypal.com/sdk/js?client-id=AfCInsOnrpTadlWPOtzELzC64q3LjatLz7A7Yn20bzsQzwuyA8aoqucr7KnxREeVrQ5YKrx-bb0TgTsM" async></script>
//         <script src="https://static.pokpay.io/public/dist/pokpayments/pok-payment.js" async></script>
//         </body>
//     </html>
//   );
// }


// RootLayout.js
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import Navbar from "./(components)/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Subnav from "./(components)/Subnav";
import Bottom from "./(components)/Bottom";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Albanian Rental Tourism</title>
        <meta name="description" content="Një platformë inovative ku shitësit ofrojnë makinat e tyre për qira dhe klientët mund të rezervojnë dhe paguajnë lehtësisht. Eksploroni ofertat më të mira për makinat që përshtaten me nevojat tuaja dhe bëni një rezervim të shpejtë dhe të sigurt. Zbuloni një përvojë të jashtëzakonshme në turizmin me qira në Shqipëri dhe shijoni udhëtime të paharrueshme me makinat që dëshironi." />
        <meta name="keywords" content="qira makina Shqipëri, turizëm me qira, rezervim makine, platformë qiraje, udhëtime Shqipëri" />
        <meta name="author" content="Albanian Rental Tourism Team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Albanian Rental Tourism" />
        <meta property="og:description" content="Një platformë inovative për qira makinash në Shqipëri. Rezervoni dhe paguani lehtësisht për makinat që përshtaten me nevojat tuaja dhe shijoni udhëtime të paharrueshme." />
        <meta property="og:site_name" content="Albanian Rental Tourism" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Albanian Rental Tourism" />
        <meta name="twitter:description" content="Një platformë inovative për qira makinash në Shqipëri. Rezervoni dhe paguani lehtësisht për makinat që përshtaten me nevojat tuaja dhe shijoni udhëtime të paharrueshme." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 bg-[#F7F7F7] z-[10000]">
          <Subnav />
          <Navbar />
        </div>
        <div className="pt-[8%] bg-[#F7F7F7] min-h-[90vh]">{children}</div>
        <Bottom />
        <Toaster />
        <script src="https://www.paypal.com/sdk/js?client-id=AfCInsOnrpTadlWPOtzELzC64q3LjatLz7A7Yn20bzsQzwuyA8aoqucr7KnxREeVrQ5YKrx-bb0TgTsM" async></script>
        <script src="https://static.pokpay.io/public/dist/pokpayments/pok-payment.js" async></script>
      </body>
    </html>
  );
}
