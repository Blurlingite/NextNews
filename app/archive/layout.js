// this layout.js file is different than other layout.js files
// because it is next to 2 parallel routes:
// the @archive & @latest folders
// Parallel routes must have "@" in their name, but the rest of the name is up to you
// Because of this, the function below gets a prop that
// has an "archive" field and a "latest" field
// When looking at the latest news, the "latest" field will be used.
// Otherwise the "archive" field will be used
export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
