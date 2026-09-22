import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductShowcase />
      </main>
      <Footer />
    </>
  );
}
