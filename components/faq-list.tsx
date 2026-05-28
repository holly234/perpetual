export function FAQList({ items }: { items: readonly string[][] }) {
  return (
    <div className="grid gap-3">
      {items.map(([question, answer]) => (
        <div key={question} className="border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
          <h3 className="font-semibold">{question}</h3>
          <p className="mt-2 leading-7 text-[color:var(--muted)]">{answer}</p>
        </div>
      ))}
    </div>
  );
}
