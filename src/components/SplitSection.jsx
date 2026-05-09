import "./SplitSection.css";

function SplitSection({
  id,
  className,
  image,
  imageAlt = "",
  secondaryImage,
  secondaryAlt = "",
  /** Extra images stacked below primary / secondary (e.g. project gallery). */
  moreImages,
  reverse = false,
  hero = false,
  children,
}) {
  const extraList = Array.isArray(moreImages) ? moreImages : [];
  const stacked =
    Boolean(secondaryImage) || extraList.length > 0;

  return (
    <section
      id={id}
      className={[
        "split-section",
        reverse ? "split-section--reverse" : "",
        hero ? "split-section--hero" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "split-section__media",
          stacked ? "split-section__media--stack" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="split-section__media-slot">
          <img
            src={image}
            alt={imageAlt}
            loading={hero ? "eager" : "lazy"}
            decoding="async"
            className="split-section__img"
          />
          <div className="split-section__media-overlay" aria-hidden="true" />
        </div>
        {secondaryImage ? (
          <div className="split-section__media-slot">
            <img
              src={secondaryImage}
              alt={secondaryAlt}
              loading="lazy"
              decoding="async"
              className="split-section__img"
            />
            <div className="split-section__media-overlay" aria-hidden="true" />
          </div>
        ) : null}
        {extraList.map((item, index) => (
          <div
            key={`extra-${index}`}
            className="split-section__media-slot"
          >
            <img
              src={item.src}
              alt={item.alt ?? ""}
              loading="lazy"
              decoding="async"
              className="split-section__img"
            />
            <div className="split-section__media-overlay" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="split-section__content">{children}</div>
    </section>
  );
}

export default SplitSection;
