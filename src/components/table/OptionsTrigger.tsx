import { more } from "assets";
import { useComponentVisible } from "hooks";
import { FC } from "react";
import Options from "./Options";

type Props = {
  id: string;
};

const OptionsTrigger: FC<Props> = ({ id }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleOptions = (): void => {
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <>
      <button type="button" onClick={toggleOptions}>
        <img src={more} alt="more" className="icon" />
      </button>
      <Options
        id={id}
        userOptionsCardRef={ref}
        isUserOptionsCardOpened={isComponentVisible}
      />
    </>
  );
};

export default OptionsTrigger;
