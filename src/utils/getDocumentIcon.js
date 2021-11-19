import FileIcon from "../icons/File";
import DocumentIcon from "../icons/Document";
import VideoIcon from "../icons/Video";

export default function getDocumentIcon(type) {
  if (type === "file") {
    return <FileIcon style={{ fontSize: "17px", color: "grey" }} />;
  } else if (type === "text") {
    return <DocumentIcon style={{ fontSize: "17px", color: "grey" }} />;
  } else if (type === "video") {
    return <VideoIcon style={{ fontSize: "17px", color: "grey" }} />;
  }
}
