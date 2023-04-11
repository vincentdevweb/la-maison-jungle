function CareScale({ scaleValue, careType }) {
  let range = [1, 2, 3];
  let scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
