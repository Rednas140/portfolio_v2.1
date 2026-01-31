export default function Chip({ type, content }: any) {
  let chipClasses: string =
    "inline-block py-1.5 px-2 text-sm rounded-full lg:py-2 lg:px-3 ";

  if (type == "primary") {
    chipClasses = chipClasses + "bg-purple-600";
  } else if (type == "secondary") {
    chipClasses = chipClasses + "bg-pink-600";
  }
  return <span className={chipClasses}>{content}</span>;
}
