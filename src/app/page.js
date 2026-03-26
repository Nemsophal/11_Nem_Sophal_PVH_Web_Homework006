import ProductHomepageCardComponent from "@/app/components/ProductHomepageCardComponent";
import CustomerHomepageCardComponent from "@/app/components/CustomerHomepageCardComponent";

export default function Home() {
  return (
    <div className="w-full gap-8 flex items-center justify-center bg-gradient-to-br from-pink-50 to-white">
      <ProductHomepageCardComponent />
      <CustomerHomepageCardComponent />
    </div>  
  );
}