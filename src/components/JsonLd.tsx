type JsonLdProps = {
  data: object | object[];
  id?: string;
};

/** Renders crawlable structured data in the initial document. */
export function JsonLd({ data, id = "structured-data" }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
