import Text from "../../01-atoms/text/text";
import Button from "../../01-atoms/button/button";
import RelatedContent from "../../03-organisms/related_content/related_content";
import Video from "../../01-atoms/video/video";
import Link from "next/link";
import Image from "next/image";
import Poll from "../../02-molecules/polls/polls";
import IncrowdLiveBlog from "../../02-molecules/incrowd-liveblog/incrowdliveblog";
import IncrowdForm from "../../02-molecules/incrowd-forms/incrowd-forms";
import Quote from "../../02-molecules/quote/quote";

const Bridge = ({ content }) => {

    const contentType = content.contentType
    switch (contentType) {
        case "TEXT":
            return (<Text content={content.content} />)
        case "BUTTON":
            return (<Button onClick={() => <Link href={content.link} />}>{content.title}</Button>)
        case "RELATED_CONTENT":
            return (<RelatedContent />);
        case "IMAGE":
            return (
                <div className="object-contain relative" >
                    <Image src={content.image} width={640} height={480} />
                </div>
            )
        case "VIDEO":
            return (<Video width={640} height={480} src={content.link} />);
        case "FORM":
            return (<IncrowdForm content={content} />);
        case "LIVE_BLOG":
            return (<IncrowdLiveBlog content={content} />);
        case "POLL":
            return (<Poll content={content} />);
        case "QUOTE":
            return (<Quote content={content}></Quote>);
        case "GALLERY":
            return (<>"GALLERY"</>);
        case "COLLECTION":
            return (<>"COLLECTION"</>);
        case "CUSTOM":
            return (<>"CUSTOM"</>);
        case "FEED":
            return (<>"FEED"</>);
        default:
            return (<>&nbsp;</>);
    }
}

export default Bridge;
