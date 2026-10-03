export interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq({
  title = "Before you apply.",
  intro,
  items,
}: {
  title?: string;
  intro: string;
  items: FaqItem[];
}) {
  return (
    <section className="faq-section">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-dot"></span>Questions
        </p>
        <h2 className="section-title">{title}</h2>
        <p className="faq-intro">{intro}</p>

        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                {item.question}
                <span className="faq-chevron" aria-hidden="true"></span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
