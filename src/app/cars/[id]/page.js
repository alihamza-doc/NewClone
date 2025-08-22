export default function CarDetailPage({ params }) {
  return (
    <div>
      <h1>Car Detail - {params.id}</h1>
      <p>Details for this car will appear here.</p>
    </div>
  );
}
