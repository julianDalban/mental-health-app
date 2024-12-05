function ButtonSecondary({text, onClick}) {
  return (
    <div className="invisible max-w-sm bg-inherit rounded-sm shadow-lg mx-auto flex items-center shrink-0">
      <button className="visible border-2 font-serif border-double border-slate-300 px-5 py-1 rounded-xl shadow-lg transition 
      ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-110 
      hover:bg-cyan-500 hover:text-gray-700 duration-300 text-gray-200" 
      onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

// to use for a secondary button: 'border border-slate-300 hover:border-slate-400'
export default ButtonSecondary;