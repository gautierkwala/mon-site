// Bloc de questions frequentes pour un article, calque sur celui de la page
// d'accueil : le balisage FAQPage et le texte affiche sont generes depuis le
// MEME tableau, ils ne peuvent donc pas diverger. Un balisage qui ne
// correspond pas au texte visible est traite comme une tromperie par Google.

export type Question = { question: string; reponse: string };

export function FaqArticle({ questions }: { questions: Question[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, reponse }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: reponse },
    })),
  };

  return (
    <section className="mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="mt-12 font-asap text-[28px] font-bold italic leading-tight text-onyx">
        Questions fréquentes
      </h2>
      <div className="mt-8">
        {questions.map(({ question, reponse }) => (
          <details
            key={question}
            className="group border-b border-onyx/15 py-5 first:border-t"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-onyx marker:content-none">
              <h3 className="font-asap text-[19px] font-medium">{question}</h3>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 font-dm-sans text-[22px] leading-none text-wisteria-text transition-transform duration-150 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 font-dm-sans text-[17px] leading-8 text-onyx/80">
              {reponse}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
