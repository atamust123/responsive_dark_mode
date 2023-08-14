import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function SlideGallery({ slides }) {
  const [index, setIndex] = React.useState(-1);
  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </>
  );
}
