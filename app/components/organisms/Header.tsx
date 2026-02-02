import HeaderContent from "../molecules/HeaderContent";
import HeaderImages from "../molecules/HeaderImages";

export default function Header() {
  return (
    <header className="flex pt-4 px-4 pb-8 gap-6 items-center justify-center flex-col md:pt-6 md:px-12 md:pb-18 lg:flex-row lg:justify-between lg:min-h-[calc(100vh - 71px)] lg:px-28 lg:pb-24 xl:px-53">
      <HeaderContent></HeaderContent>
      <HeaderImages></HeaderImages>
    </header>
  );
}
