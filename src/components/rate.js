import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as FilledStar } from '../icons/filledStar.svg';

export default function Rate (props) {
  const { value } = props;
  const displayedRate = value < 1 ? 1 :
    value > 5 ? 5 : Math.round(value);
  const filledStars = (new Array(displayedRate))
    .fill(0);
  const renderEmptyStars = displayedRate < 5;
  const emptyStars = renderEmptyStars && (new Array(5 - displayedRate))
    .fill(0);

  const renderedFilledStars = filledStars
    .map((star, id) => <FilledStar key={`filled-star_${id}`} />);
  const renderedEmptyStars = renderEmptyStars && emptyStars
    .map((star, id) => <Star key={`empty-star_${id}`} />);

  return (
    <div className="Rate">
      {renderedFilledStars}
      {renderedEmptyStars}
    </div>
  );
}
