import React, { useState, useCallback } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useParams
} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import posts from "./posts.json";

let posts_dict = {};

posts.forEach(post => (posts_dict[post.postId] = post));

export default function Creative() {
  let { path, url } = useRouteMatch();
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h2>Posts</h2>
          {posts.map((post, i) => (
            <PostTitle {...post} key={i} />
          ))}
        </Route>
        <Route path={`${path}/:postId`}>
          <Post />
        </Route>
      </Switch>
      <Post />
    </div>
  );
}

export function PostTitle(props) {
  let { title, date, postId, feature_img_uri } = props;
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/${postId}`}>
        <h4>{title}</h4>
      </Link>
      <p>{date}</p>
      <img className="featureImg" src={feature_img_uri} />
    </div>
  );
}

export function Post() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let { postId } = useParams();
  if (!postId) return null;
  else {
    let { title, text, photos, date } = posts_dict[postId];
    console.log(photos);

    return (
      <div>
        <div className="d-flex bottomLine">
          <h3 className="mt-auto marginBotZero">{title}</h3>
          <h7 className="ml-auto mt-auto">{date}</h7>
        </div>
        <p className="makeTextSmaller">{text}</p>
        <div>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    );
  }
}
