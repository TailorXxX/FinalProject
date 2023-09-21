export default function Page({ children }) {
  return (
    <main className="w-3/4 center-content">
      <div className="w-3/4">{children}</div>
    </main>
  );
}
