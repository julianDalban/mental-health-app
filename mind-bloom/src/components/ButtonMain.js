function ButtonMain({text, onClick}) {
  return (
    <div className="invisible max-w-sm shadow-lg mx-auto flex items-center">
      <button className="visible border-1 font-serif border-double border-slate-100 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300"
      onClick={onClick}>{text}
      </button>
    </div>
  );
}

// to use for a secondary button: 'border border-slate-300 hover:border-slate-400'
export default ButtonMain;
