import GradientBackground from "./GradientBackground";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RouteWarmup from "./RouteWarmup";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = "" }: Props) {
  return (
    <>
      <GradientBackground />
      <RouteWarmup />
      <Navbar />
      <main className={`mx-auto min-h-[calc(100vh-72px)] w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
