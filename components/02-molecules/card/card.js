import Link from "next/link";

import Divider from "../../01-atoms/divider/divider";
import Icon from "../../01-atoms/icon/icon";
import formatDate from "../../../utils/formatDate";
import PlayIcon from "../../../assets/icons/card/play.svg";
import ResponsiveImage from "../../01-atoms/image/responsiveImage";

const Card = ({ content }) => {
  return (
    <div className="my-4">
      <Link
        className="block w-full h-[346px] shadow rounded-b-2xl"
        href={content && "/news/" + content.slug}
      >
        <div className="relative h-[174px]">
          <ResponsiveImage
            heroMedia={content.heroMedia}
          />
          {content.heroMedia.content.contentType === "VIDEO" && (
            <div className="absolute bottom-0 w-12 h-12 flex justify-center items-center bg-lightBlue rounded-tr-2xl">
              <div className="w-6 h-6">
                <Icon src={PlayIcon} altText="video" />
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          {content.heroMedia.category && (
            <div className="label-base">{content.heroMedia.category}</div>
          )}
          <h4 className="mt-1 mb-3 h-[72px]">{content.heroMedia.title}</h4>
          <Divider />
          <div className="mt-3 flex">
            <span className="body-sm text-darkGrey">
              {formatDate(content.publishDate)}
            </span>
            <span className="flex items-center body-sm text-darkGrey before:w-[3px] before:h-[3px] before:mx-2 before:bg-darkGrey before:rounded">
              <div>04:01 min</div>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;