import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Let's get started</p>
            <p class="text-slate-500 font-medium">
              Please follow the steps below to help us get to know your name,
              income and spending behaviour. Afterwards you will see your
              income, split into sections. In each section you my track your
              expenses and always know how much you have left. Hope you enjoy
              it!{" "}
            </p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Begin
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
