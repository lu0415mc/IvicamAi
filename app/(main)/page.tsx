import Body from "./_components/Body";
import Footer from "./_components/Footer";
import MainNavbar from "./_components/MainNavbar";
import Products from "./_components/Products";
import SecondBody from "./_components/secondBody";

export default function Home() {

  return (
    <>
      <MainNavbar/>
    <div className="px-3 md:px-5 lg:px-8">
      <Body/>
    </div>
      <Products/>
      <SecondBody/>
      <Footer/>
    </>

  );
}
