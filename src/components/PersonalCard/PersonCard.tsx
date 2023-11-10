import { IPerson } from '@/components/PersonalCard/types';
import './PersonCard.scss';

export default function PersonCard({ name }: IPerson) {
  return (
    <div className="person-card">
      <div className="person-card__name">{name}</div>
    </div>
  );
}
