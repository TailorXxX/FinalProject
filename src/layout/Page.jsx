export default function Page({ children }) {
  return (
    <main className="max-w flex justify-self-center">
      <div className="max-2 flex-col content-center">{children}</div>
    </main>
  );
}
