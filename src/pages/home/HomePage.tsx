import HomeForm from "@/sections/home/home-form";
import HomeWelcome from "@/sections/home/home-welcome";

function HomePage() {
  return (
    <main className="max-w-md mx-auto px-8 h-screen min-h-max flex flex-col justify-center items-center">
      <HomeWelcome />
      <HomeForm />
    </main>
  );
}

export default HomePage;
