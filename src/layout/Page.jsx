export default function Page({ children }) {
  return (
    <main className="max-w flex justify-self-center m-4">
      <div className="max-w flex-col content-center">{children}</div>
    </main>
  );
}
