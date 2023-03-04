import Colapse from "./Colapse";

function AccomodationColapseContainer({ annonce }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-20">
      <Colapse title="Description" text={annonce.description} />
      <Colapse title="Equipements" list={annonce.equipments} />
    </div>
  );
}

export default AccomodationColapseContainer;
