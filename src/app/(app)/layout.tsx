import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
