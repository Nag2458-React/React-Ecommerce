import React from "react";

const information = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae",
    url: "https://via.placeholder.com/150/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit ",
    url: "https://via.placeholder.com/150/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro ",
    url: "https://via.placeholder.com/150/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio ",
    url: "https://via.placeholder.com/150/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi ",
    url: "https://via.placeholder.com/150/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea ",
    url: "https://via.placeholder.com/150/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus",
    url: "https://via.placeholder.com/150/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis",
    url: "https://via.placeholder.com/150/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qu",
    url: "https://via.placeholder.com/150/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et ",
    url: "https://via.placeholder.com/150/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
];

const Example1 = () => {
  return (
    <div className="container" style={{ paddingBottom: "50px" }}>
      <h2>Welcome Props Example One</h2>
      <br />
      <div className="row">
        {information.map((item, index) => {
          const { albumId, id, title, url, thumbnailUrl } = item;
          return (
            <div className="col-md-3">
              <ProfileInfo
                albumId={albumId}
                id={id}
                title={title}
                url={url}
                thumbnailUrl={thumbnailUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileInfo = (props) => {
  const { title, url, thumbnailUrl } = props;
  return (
    <div className="profile">
      <img src={url} alt="fsg" />
      <h2 className="title">{title}</h2>
      <span>{thumbnailUrl}</span>
    </div>
  );
};
export default Example1;
