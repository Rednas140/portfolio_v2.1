type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as = "h2",
  children,
  className = "",
}: HeadingProps) {
  const Component = as;

  const styles: Record<typeof as, string> = {
    h1: "text-5xl font-syne font-black",
    h2: "text-3xl font-syne font-bold",
    h3: "text-2xl font-syne font-semibold",
    h4: "text-xl font-syne",
    h5: "text-lg font-syne",
    h6: "text-base font-bold font-syne",
  };

  return (
    <Component className={`${styles[as]} ${className}`}>{children}</Component>
  );
}
