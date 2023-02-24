import PagesLayout from "./PagesLayout";

export default function NormalPageLayout(props) {
  return (
    <PagesLayout>
      {props.children}
    </PagesLayout>
  );
}
