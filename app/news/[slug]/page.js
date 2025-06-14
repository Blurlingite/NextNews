import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({ params }) {
  const newsSlug = params.slug; // the slug comes from the dynamic url which is indicated by the folder [slug]

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound(); // shows the closest not-found.js page when a news item can't be found
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
