type pokemon = {
  name: string;
  imgSrc?: string;
};

type navBarProps = {
  index: number;
  setIndex: (index: number) => void;
  list: pokemon[];
};

function NavBar({ index, setIndex, list }: navBarProps) {
  const handleClickNext = () => {
    setIndex(index + 1);
  };
  const handleClickPrevious = () => {
    setIndex(index - 1);
  };

  return (
    <div>
      {index > 0 ? (
        <button type="button" onClick={handleClickPrevious}>
          Précédent
        </button>
      ) : (
        <></>
      )}
      {index < list.length - 1 ? (
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
