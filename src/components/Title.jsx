export default function Title({ title, subtitle }) {
  return (
    <>
      <h1 className="text-yellow-400 text-base uppercase tracking-widest text-center font-semibold">
        {title}
      </h1>
      <span className="block text-center text-4xl font-bold">{subtitle}</span>
    </>
  );
}
