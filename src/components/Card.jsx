export default function Card({ img, width, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="h-40 mx-auto flex items-center justify-center">
        <img src={img} width={width} alt="" className="mx-auto" />
      </div>
      <div>
        <p className="text-lg font-bold">{title}</p>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
