/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShowerPlayListSongs,
  selectPartyPlayListSongs,
  selectPlayListLoader,
} from "./selector";
import { fetchTopShowerSongs, fetchTopPartySongs } from "./thunk";
import { asycStatus } from "../../utils/constants";
import loaderSvg from "../../assets/loader.svg";
import artist1 from "../../assets/playlist/1.svg";
import artist2 from "../../assets/playlist/2.svg";
import artist3 from "../../assets/playlist/3.svg";
import artist4 from "../../assets/playlist/4.svg";
import { FaMusic } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import "./styles.scss";

const getImageIcon = () => {
  const imgList = [artist1, artist2, artist3, artist4];
  const index = Math.floor(Math.random() * 3) + 0;
  return imgList[index];
};

const renderPlayListView = (list) =>
  list.map((l) => (
    <div className="playlist-view-songs">
      <div className="playlist-view-songs-wrapper">
        <div className="playlist-view-songs-wrapper-content">
          <div>
            <img
              className="playlist-view-songs-wrapper-content-img"
              src={getImageIcon()}
              alt="artist"
            />
          </div>
          <div className="playlist-view-songs-wrapper-content-details">
            <div className="playlist-view-songs-wrapper-content-name">
              {l.name}
            </div>
            <div className="playlist-view-songs-wrapper-content-artist">
              {l.artist}
            </div>
          </div>
        </div>
        <div className="playlist-view-songs-wrapper-content-dots">
          <IoPlayCircleOutline size={38} />
        </div>
      </div>
    </div>
  ));

export const PlayListViewPanel = () => {
  const [isPartyView, setPartyView] = useState(false);
  const topShowerSongsList = useSelector(selectShowerPlayListSongs);
  const topPartySongsList = useSelector(selectPartyPlayListSongs);
  const loader = useSelector(selectPlayListLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPartyView && !topPartySongsList.length) {
      dispatch(fetchTopPartySongs());
    } else {
      if (!topShowerSongsList.length) {
        dispatch(fetchTopShowerSongs());
      }
    }
  }, [isPartyView]);

  const handleChevronClick = () => {
    setPartyView(!isPartyView);
  };

  return (
    <div className="playlist-view">
      <div
        className="playlist-view-cover"
        style={{ background: isPartyView ? "#A6B9FF" : "#BBA5FF" }}
      >
        <div className="playlist-view-cover-options">
          <FaChevronLeft
            className="playlist-view-cover-options-chevron"
            size={22}
            onClick={handleChevronClick}
          />
          <div className="playlist-view-cover-options-actions">
            <GoHeartFill size={22} />
            <LuDownload size={22} />
          </div>
        </div>
        <div className="playlist-view-cover-content">
          <div className="playlist-view-cover-content-text">
            {isPartyView ? (
              <>
                <div>
                  <LuPartyPopper size={24} />
                  Party Songs
                </div>
              </>
            ) : (
              <>
                <FaMusic size={24} />
                <div>Songs to sing out loud</div>
              </>
            )}
          </div>
          <div className="playlist-view-cover-content-subtext">
            {isPartyView
              ? "5 Songs Suggested by AI you can dance"
              : "5 Songs Suggested by AI you can sing out loud"}
          </div>
        </div>
      </div>
      {loader === asycStatus.PENDING && (
        <div className="playlist-view-loader">
          <img style={{ width: "6rem" }} src={loaderSvg} alt="loader" />
        </div>
      )}
      {loader === asycStatus.SUCCESS &&
        renderPlayListView(
          isPartyView ? topPartySongsList : topShowerSongsList
        )}
      {loader === asycStatus.FAILURE && (
        <div style={{ marginTop: "20%", textAlign: 'center' }}>Sorry... Server is down</div>
      )}
    </div>
  );
};
