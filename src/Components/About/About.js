import TopImage from "../TopImage/TopImage";
import PageLayout from "../PageLayout/PageLayout";
import AboutFoldablesArticlesList from "./AboutFoldablesArticlesList";


export default function Home() {
  return (
    <PageLayout>
      <TopImage
        imageUrl="kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"
        text={false}
      />
      <AboutFoldablesArticlesList />
    </PageLayout>
  );
}
