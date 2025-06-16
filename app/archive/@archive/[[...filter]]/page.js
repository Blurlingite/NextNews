import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  // get the year so you can display news for that year
  // "year" comes from the name of the folder [year]
  const filter = params.filter;
  const news = getNewsForYear(newsYear);

  const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // return <NewsList news={news} />;
}
