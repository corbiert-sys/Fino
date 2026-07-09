import { sizeChart } from "@/lib/products";

export function SizeGuide() {
  return (
    <section id="guide-tailles" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1B4965]">
            Guide des tailles
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Mesurez le tour de poitrine de votre chien (juste derriere les
            pattes avant) et son poids pour trouver la taille ideale.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B4965] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Taille</th>
                  <th className="px-6 py-4 text-left font-semibold">Poids du chien</th>
                  <th className="px-6 py-4 text-left font-semibold">Tour de poitrine</th>
                  <th className="px-6 py-4 text-left font-semibold">Tour de cou</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row, i) => (
                  <tr
                    key={row.size}
                    className={`border-t border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35] font-bold text-sm">
                        {row.size}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.weight}</td>
                    <td className="px-6 py-4 text-gray-700">{row.chest}</td>
                    <td className="px-6 py-4 text-gray-700">{row.neck}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 bg-[#F0F9FF] rounded-xl">
            <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">
              <strong className="text-[#1B4965]">Entre deux tailles ?</strong> Prenez la taille superieure, les sangles ajustables feront le reste.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-[#F0F9FF] rounded-xl">
            <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">
              <strong className="text-[#1B4965]">Echange gratuit</strong> si la taille ne convient pas. Retour sous 30 jours.
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 bg-[#F0F9FF] rounded-xl">
            <div className="w-8 h-8 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">
              <strong className="text-[#1B4965]">Besoin d&apos;aide ?</strong> Envoyez-nous une photo de votre chien a contact@pawlydog.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
