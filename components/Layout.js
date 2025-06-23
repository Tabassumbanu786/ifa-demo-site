import Link from "next/link";


const Layout = ({ children }) => (
  <div className="min-h-screen bg-white text-gray-800 font-sans">
    <header className="bg-purple-700 text-white py-4 px-6 md:px-12 shadow">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">IFA Website</div>
  

<nav className="space-x-6 text-sm font-medium">
  <Link href="/" className="hover:underline">Home</Link>
  <Link href="/services" className="hover:underline">Services</Link>
  <Link href="/about" className="hover:underline">About Us</Link>
  <Link href="/resources" className="hover:underline">Resources</Link>
  <Link href="/contact" className="hover:underline">Contact Us</Link>
</nav>

      </div>
    </header>

    <main className="py-8 px-4 md:px-12">{children}</main>

    <footer className="text-center py-6 text-sm text-gray-500 border-t">
      © 2025 IFA Website. All rights reserved.
    </footer>
  </div>
);

export default Layout;
