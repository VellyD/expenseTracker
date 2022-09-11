import pic from "../imgs/alexander-grey--8a5eJ1-mmQ-unsplash.jpg";

export const WelcomeElement = () => {
  return (
    <div class="py-8 px-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex m-20 sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="block mx-auto h-24 w-24 rounded-full lg:mx-0 sm:shrink-0"
        src={pic}
        alt="Counting money"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">Let's get started</p>
          <p class="text-slate-500 font-medium">
            Please follow the steps below to help us get to know your name,
            income and spending behaviour. Afterwards you will see your income,
            split into sections. In each section you my track your expenses and
            always know how much you have left. Hope you enjoy it!
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-green-600 font-bold rounded-full border border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
          Begin
        </button>
      </div>
    </div>
  );
};
