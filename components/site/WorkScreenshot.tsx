import { getImageProps } from "next/image";

// Screens from work a UniPact team delivered (public/work), with names and phone numbers
// masked. The wide picture is unreadable on a phone, so narrow screens get a closer crop
// saved alongside it as `<name>-small.webp` (680 x 620).
export default function WorkScreenshot({
  name,
  wideHeight,
  alt,
  className,
}: {
  name: string;
  wideHeight: number;
  alt: string;
  className?: string;
}) {
  const { props: small } = getImageProps({
    src: `/work/${name}-small.webp`,
    width: 680,
    height: 620,
    alt,
    unoptimized: true,
  });
  const { props: wide } = getImageProps({
    src: `/work/${name}.webp`,
    width: 1900,
    height: wideHeight,
    alt,
    unoptimized: true,
  });
  return (
    <picture>
      <source media="(min-width: 700px)" srcSet={wide.src} width={wide.width} height={wide.height} />
      <img {...small} alt={alt} className={className} />
    </picture>
  );
}
