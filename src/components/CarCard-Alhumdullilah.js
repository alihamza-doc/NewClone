export default function CarCard({ car }) {
  return (
    <div>
      <h3>{car.name}</h3>
      <p>{car.price}</p>
    </div>
  );
}
