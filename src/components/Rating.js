const Star = ({ filled }) => (
  <svg
    height="25px"
    width="23px"
    className="star"
    viewBox="0 0 25 25"
    fill={filled ? "gold" : "lightgray"}
  >
    <path d="M12 .587l3.668 7.431L23.335 9.5l-5.667 5.52L18.735 24 12 19.897 5.265 24l1.067-8.98L.665 9.5l7.667-1.482L12 .587z" />
  </svg>
);

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating} />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default Rating;
