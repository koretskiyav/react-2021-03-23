import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as FilledStar } from '../icons/star.svg';

export default function Rate (props) {
  const { value } = props;
  const displayedRate = value < 1 ? 1 :
    value > 5 ? 5 : value;
  const filledStars = new Array(displayedRate);
  const emptyStars = new Array(5 - displayedRate);

  const renderedFilledStars = filledStars
    .map((star, id) => <FilledStar key={`filled-star_${id}`} />);
  const renderedEmptyStars = emptyStars
    .map((star, id) => <Star key={`empty-star_${id}`} />);

  return (
    <div className="Rate">
      {renderedFilledStars}
      {renderedEmptyStars}
    </div>
  );
}
