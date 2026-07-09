"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4965] mb-3">
          Rejoignez la meute PawlyDog
        </h2>
        <p className="text-gray-500 mb-8">
          Soyez les premiers informes des nouveaux produits, conseils et
          offres exclusives.
        </p>

        {submitted ? (
          <div className="p-6 bg-[#F0F9FF] rounded-xl border border-[#BEE9E8]">
            <svg
              className="w-10 h-10 text-[#FF6B35] mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="font-semibold text-[#1B4965]">Bienvenue dans la meute !</p>
            <p className="text-sm text-gray-500 mt-1">
              Vous recevrez bientot nos dernieres nouvelles.
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/50 focus:border-[#FF6B35]"
            />
            <button
              type="submit"
              className="btn-coral px-8 py-3 text-sm font-bold text-white rounded-full"
            >
              S&apos;inscrire
            </button>
          </form>
        )}

        <p className="mt-3 text-xs text-gray-400">
          Pas de spam, promis. Desinscription en 1 clic.
        </p>
      </div>
    </section>
  );
}
