export default function ChallengeCard(){
    return (
        <div className="group relative cursor-pointer">
             <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        <h1>Some sample text here</h1>
                      </div>
                      <div>
                        <h3 className="text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                        More text as h3
                        </h3>                    
                      </div>
                    </div>
                  </div>

            </div>
        </div>
    )
}