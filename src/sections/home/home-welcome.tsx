import xamiLogo from "@/assets/xami-logo.png";

function HomeWelcome() {
  return (
    <div className="flex flex-col justify-center space-y-7 items-center">
      <h2>Welcome to</h2>
      <img src={xamiLogo} alt="xami logo" />
    </div>
  );
}

export default HomeWelcome;
