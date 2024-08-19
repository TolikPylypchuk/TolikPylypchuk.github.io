export default function Favicons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/images/favicons/safari-pinned-tab.svg"
        color="#52489c"
      />

      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="manifest" href="/site.webmanifest" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
