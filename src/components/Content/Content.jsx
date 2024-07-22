/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Question } from "../Question/Question";
import { RecommendedSongs } from "../RecommendedSongs/RecommendedSongs";
import { fetchRecommendedSongs } from "./thunk";
import {
  selectRecommendedSongsList,
  selectRecommendedSongLoader,
} from "./selector";
import { updateLikedSongs } from "./slice";
import loaderSvg from "../../assets/loader.svg";
import Banner from "../../assets/cover.svg";
import { PlayCircleOutlined } from "@ant-design/icons";
import { asycStatus } from "../../utils/constants";
import { Button } from "antd";
import "./styles.scss";

function Content() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const songsList = useSelector(selectRecommendedSongsList);
  const loader = useSelector(selectRecommendedSongLoader);
  const songsEndRef = useRef(null);
  useEffect(() => {
    if (loader === asycStatus.PENDING) {
      scrollToBottom();
    }
  }, [loader]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const scrollToBottom = () => {
    songsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const renderRecommendationWrapper = () => (
    <div className="content-recommendation-wrapper">
      <h3>Get Your AI-Powered Music Recommendations</h3>
      <h5>Answer questions for AI music recommendations</h5>
      <Button
        className={"content-start-btn"}
        iconPosition={"start"}
        onClick={showModal}
        icon={<PlayCircleOutlined />}
      >
        Start Now
      </Button>
    </div>
  );

  const onClickAddFavorite = (id) => {
    dispatch(updateLikedSongs({ id }));
  };

  const submitAnswers = (payload) => {
    dispatch(fetchRecommendedSongs(payload));
  };

  return (
    <div className="content">
      <div className="content-banner-wrapper">
        <img src={Banner} alt="banner" style={{ width: "35rem" }} />
      </div>
      {renderRecommendationWrapper()}
      <Question
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        submitAnswers={submitAnswers}
      />
      {loader === asycStatus.PENDING && (
        <div className="content-loader" ref={songsEndRef}>
          <img style={{ width: "6rem" }} src={loaderSvg} alt="loader" />{" "}
          <div>Loading Recommendations...</div>
        </div>
      )}
      {loader === asycStatus.SUCCESS && (
        <RecommendedSongs
          list={songsList}
          onClickAddFavorite={onClickAddFavorite}
        />
      )}
      {loader === asycStatus.FAILURE && (
        <div style={{ marginTop: "20%" }}>Sorry... Server is down</div>
      )}
    </div>
  );
}

export default Content;
