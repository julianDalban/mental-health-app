function ButtonMain({text}) {
  return (
    <div className="max-w-sm shadow-lg mx-auto flex items-center">
      <button className="border font-serif border-double borde-slate-100 px-5 py-1 rounded-xl shadow-lg transition ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300">{text}</button>
    </div>
  );
}

// to use for a secondary button: 'border border-slate-300 hover:border-slate-400'
export default ButtonMain;