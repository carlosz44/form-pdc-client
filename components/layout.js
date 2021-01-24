import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      {/* <main className="flex-1 mx-auto container px-4 py-6 md:py-12">
        {props.children}
      </main> */}
      <main className="flex-1  bg-gray-50">{props.children}</main>

      <Footer />
    </div>
  );
}
