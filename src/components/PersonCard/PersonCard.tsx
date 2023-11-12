import { IPerson } from '@/components/PersonCard/types';
import './PersonCard.scss';

export default function PersonCard({ name }: IPerson) {
  return (
    <div className="person-card" data-testid="person-card">
      <div className="person-card__name">{name}</div>
    </div>
  );
}
