export default function NewsDetailPage({ params }) {
  const newsId = params.id; // the id comes from the dynamic url which is indicated by the folder [id]

  return (
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {newsId}</p>
    </>
  );
}
