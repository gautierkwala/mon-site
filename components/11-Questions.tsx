// Les reponses affichees et le balisage FAQPage sont generes depuis CE tableau.
// Un balisage qui ne correspond pas au texte visible est traite comme une
// tromperie par Google : les faire diverger n'est ici pas possible.
//
// Ce bloc sert deux publics. Les moteurs classiques, qui peuvent afficher ces
// questions directement dans les resultats. Et les assistants (ChatGPT,
// Perplexity, Google AI), qui citent volontiers des reponses courtes,
// factuelles et autonomes : chaque reponse ci-dessous se comprend seule, sans
// le reste de la page.
export const QUESTIONS = [
  {
    question:
      "Quelle est la différence entre un coaching commercial et une formation commerciale ?",
    reponse:
      "Une formation transmet des connaissances, souvent en ligne et en groupe. Un coaching commercial travaille la pratique : un appel passé en direct devant un coach, un rendez-vous réécouté et analysé ensemble, une correction sur le moment. Chez Kwala, l’accompagnement est une formation-action : on s’entraîne sur vos dossiers réels, pas sur des cas d’école.",
  },
  {
    question: "Le coaching commercial de Kwala est-il finançable par un OPCO ?",
    reponse:
      "Oui. Kwala est porté par un organisme de formation, ce qui permet de mobiliser un budget OPCO pour financer l’accompagnement. Kwala n’est pas certifié Qualiopi en propre : la certification est celle de l’organisme porteur. Le montant pris en charge dépend de votre OPCO et de votre branche, nous le regardons ensemble lors du premier échange.",
  },
  {
    question: "Combien de temps dure un accompagnement ?",
    reponse:
      "De 3 à 12 mois, selon l’objectif visé et la taille de l’équipe. Le rythme est celui d’une formation-action : des sessions régulières entrecoupées de mise en pratique sur le terrain, entre deux séances.",
  },
  {
    question: "Intervenez-vous ailleurs qu’à Lyon ?",
    reponse:
      "Kwala est installé à Lyon, où se tient l’essentiel des sessions en présentiel. Pour les équipes commerciales, nous intervenons partout en France.",
  },
  {
    question: "À qui s’adresse le coaching commercial de Kwala ?",
    reponse:
      "À deux profils. Les dirigeants et entrepreneurs qui vendent eux-mêmes et veulent structurer leur démarche commerciale. Et les équipes commerciales B2B qui cherchent à générer plus de rendez-vous et à conclure davantage.",
  },
  {
    question: "Comment se passe un premier contact ?",
    reponse:
      "Par un échange avec un coach, sans engagement. Il sert à comprendre votre situation commerciale et à vérifier qu’un accompagnement est pertinent pour vous. Si ce n’est pas le cas, nous vous le disons.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map(({ question, reponse }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: reponse },
  })),
};

export function Questions() {
  return (
    <section id="questions" className="w-full bg-alabaster">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[96px]">
        <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
          Questions fréquentes
        </p>
        <h2 className="mt-4 max-w-[820px] font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
          Ce qu’on nous demande le plus souvent
        </h2>

        {/* <details> natif : ouverture au clavier et annonce correcte aux
            lecteurs d'ecran, sans une ligne de JavaScript. */}
        <div className="mt-10 max-w-[900px]">
          {QUESTIONS.map(({ question, reponse }) => (
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
              <p className="mt-4 max-w-[760px] font-dm-sans text-[17px] leading-8 text-onyx/80">
                {reponse}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
