import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      <Header />

      <main className="flex-1 mx-auto container px-4 py-6 md:py-12">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
