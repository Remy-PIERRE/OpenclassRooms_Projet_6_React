import Header from '../../Components/Header/Header'

export default function PagesLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
