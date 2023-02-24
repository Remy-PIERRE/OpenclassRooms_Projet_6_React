import PagesLayout from "./PagesLayout";
import Footer from "../../Components/Footer/Footer";

export default function NormalPageLayout({ children }) {
  return (
    <PagesLayout>
      {children}
      <Footer />
    </PagesLayout>
  );
}
