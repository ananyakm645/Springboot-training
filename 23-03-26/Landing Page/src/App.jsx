import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <div className="relative min-h-screen bg-[url('https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?cs=srgb&dl=pexels-pixabay-417045.jpg&fm=jpg')] bg-cover bg-center">

    <div className="absolute inset-0 "></div>
      <NavBar />
      <Hero />
      </div>
    </>
  );
}
export default App;
