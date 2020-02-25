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

export default function Blog() {
  let { path, url } = useRouteMatch();
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <div className="d-flex flex-wrap justify-content-center">
            {posts.map((post, i) => (
              <PostTitle {...post} key={i} />
            ))}
          </div>
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
    <Link to={`${url}/${postId}`}>
      <div className="d-flex justify-content-center align-items-center postTitle">
        <p className="position-absolute titleText">{title}</p>
        <img className="w-100" src={feature_img_uri} />
      </div>
    </Link>
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
