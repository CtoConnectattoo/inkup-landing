// components/FAQAccordion.tsx
type FAQItem = {
  question: string;
  answer: string;
};

export default function FaqSectionBlog({ items }: { items: FAQItem[] }) {
  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details key={i} className="border rounded-lg p-4">
            <summary className="font-medium cursor-pointer">{item.question}</summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
