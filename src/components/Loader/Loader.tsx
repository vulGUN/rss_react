import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <div>Loading</div>
      <>
        <div className="loader__item" id="loader__item-1" />
        <div className="loader__item" id="loader__item-2" />
        <div className="loader__item" id="loader__item-3" />
      </>
    </div>
  );
}
