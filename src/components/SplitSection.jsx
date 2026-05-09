import "./SplitSection.css";

function SplitSection({
  id,
  className = "",
  image,
  imageAlt = "",
  secondaryImage,
  secondaryAlt = "",
  reverse = false,
  hero = false,
  children,
}) {
  const stacked = Boolean(secondaryImage);

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
        {stacked ? (
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
      </div>
      <div className="split-section__content">{children}</div>
    </section>
  );
}

export default SplitSection;
