import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialMedia } from "../constants/contants";

const SocialMedia = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            Quer acompanhar mais conteúdos?
          </p>
          <p className={`${styles.sectionHeadText}`}>Redes Socias</p>
        </motion.div>

        <div
          className={`px-6 mt-10 pb-14 flex flex-col sm:flex-row sm:flex-wrap gap-10 `}
        >
          {socialMedia.map((media, index) => (
            <Link to={`${media.link}`} target="_blank">
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 1)}
                className="text-center flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="w-10 h-10 object-contain duration-500 hover:scale-110">
                  <img src={media.icon} alt={media.media} />
                </div>
                <p className="text-zinc-200 font-bold text-[18px]">
                  {media.media}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SocialMedia, "");
