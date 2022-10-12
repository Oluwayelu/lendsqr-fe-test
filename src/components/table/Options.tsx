import { AnimatePresence, Variants, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FC } from "react";

import { activate_user, delete_friend, view } from "assets";
import { DUMMY } from "routes";

type Props = {
  id: string;
  userOptionsCardRef: React.RefObject<HTMLDivElement>;
  isUserOptionsCardOpened: boolean;
};

const optionsVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Options: FC<Props> = ({
  id,
  userOptionsCardRef,
  isUserOptionsCardOpened,
}) => {
  return (
    <AnimatePresence>
      {isUserOptionsCardOpened && (
        <motion.div
          key={`options-${id}`}
          variants={optionsVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="more-options"
          ref={userOptionsCardRef}
        >
          <Link to={`/users/${id}`} className="more-links">
            <img src={view} alt="activate user" className="icon" />
            <p>View Details</p>
          </Link>
          <Link to={DUMMY} className="more-links">
            <img src={delete_friend} alt="activate user" className="icon" />
            <p>Blacklist User</p>
          </Link>
          <Link to={DUMMY} className="more-links">
            <img src={activate_user} alt="activate user" className="icon" />
            <p>Activate User</p>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Options;
