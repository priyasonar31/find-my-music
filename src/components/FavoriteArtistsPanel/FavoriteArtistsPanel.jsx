import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { updateLikedSongs } from "./slice";
import { selectAlbumListLoader, selectAlbumList } from "./selector";
import { fetchArtistTopSongs } from "./thunk";
import { GoHeartFill } from "react-icons/go";
import loaderSvg from "../../assets/loader.svg";
import { rightPanelDetails, asycStatus } from "../../utils/constants";
import "./styles.scss";

export const FavoriteArtistsPanel = () => {
  const headerTitle = "Favorite Artist";
  const dispatch = useDispatch();
  const [artistName, setArtistName] = useState("The Weeknd");
  const favArtistDetails = rightPanelDetails[1].containerDetails;

  useEffect(() => {
    dispatch(fetchArtistTopSongs(artistName));
  }, [artistName, dispatch]);

  const fetchArtistSongs = (id) => {
    setArtistName(id);
    dispatch(fetchArtistTopSongs(id));
  };

  const loader = asycStatus.SUCCESS;
  return (
    <ArtistsPanel
      artistDetails={favArtistDetails}
      loader={loader}
      headerTitle={headerTitle}
      fetchArtistSongs={fetchArtistSongs}
      isSongsPanel={false}
    />
  );
};

export const RecentlyPlayedPanel = () => {
  const headerTitle = "Recently Played";
  const dispatch = useDispatch();

  const albumList = useSelector(selectAlbumList);
  const albumListLoader = useSelector(selectAlbumListLoader);
  const fetchArtistSongs = () => {
    window.open();
  };
  const onClickAddFavorite = (id) => {
    dispatch(updateLikedSongs({ id }));
  };
  return (
    <ArtistsPanel
      artistDetails={albumList}
      loader={albumListLoader}
      headerTitle={headerTitle}
      fetchArtistSongs={fetchArtistSongs}
      onClickAddFavorite={onClickAddFavorite}
      isSongsPanel={true}
    />
  );
};

const ArtistsPanel = (props) => {
  const {
    artistDetails,
    loader,
    headerTitle,
    fetchArtistSongs,
    onClickAddFavorite,
    isSongsPanel,
  } = props;
  const handleOnClickName = (payload) => {
    if (isSongsPanel) window.open(payload);
    else {
      fetchArtistSongs(payload);
      window.scrollTo(0, document.body.scrollHeight);
    }
  };
  return (
    <div className="artist-container" key={headerTitle}>
      <div className="artist-container-header">{headerTitle}</div>
      <div className="artist-container-wrapper">
        {loader === asycStatus.PENDING && (
          <img src={loaderSvg} style={{ width: "6rem", marginTop: '30%' }} alt="" />
        )}
        {loader === asycStatus.SUCCESS &&
          artistDetails?.map((cd, index) => (
            <div
              className="artist-container-details"
              key={index}
              onClick={handleOnClickName.bind(
                this,
                isSongsPanel ? cd.url : cd.name
              )}
            >
              <div className="artist-container-details-avatar-wrapper">
                <div className="artist-container-details-avatar-wrapper-img">
                  <img src={cd.imageLink} alt={cd.alt} />
                </div>
                <div className="artist-container-details-avatar-wrapper-name-details">
                  <div
                    className="artist-container-details-avatar-wrapper-name-details-name"
                    id={cd.name}
                  >
                    {cd.name}
                  </div>
                  <div className="artist-container-details-avatar-wrapper-name-details-address">
                    {cd.address}
                  </div>
                </div>
              </div>
              {cd.isButton ? (
                <FaStar size={24} style={{ color: "#FEB139" }} />
              ) : (
                <div
                  className="artist-container-details-avatar-wrapper-heart"
                  onClick={onClickAddFavorite.bind(this, cd.id)}
                >
                  <GoHeartFill
                    className="artist-container-details-avatar-wrapper-svg"
                    size={24}
                    style={{
                      color: `${cd.isSelected ? "#F55353" : "#5179A3"}`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
