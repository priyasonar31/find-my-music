import { FaRegCirclePlay } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import "./styles.scss";

export const RecommendedSongs = (props) => {
  const { list, onClickAddFavorite } = props;

  return (
    <div>
      <div className="header" style={{ marginLeft: "7%", textAlign: "center" }}>
        Recommended Songs
      </div>
      <div className="songs-wrapper">
        {list.map((l, index) => (
          <div className="songs-wrapper-details" key={++index}>
            <div className="songs-wrapper-details-action-wrapper">
              <div className="songs-wrapper-details-index">{++index}</div>
              <div className="songs-wrapper-details-actions">
                <div
                  title="Play"
                  className="songs-wrapper-details-actions-play"
                  onClick={() => window.open(l.url)}
                >
                  {" "}
                  <FaRegCirclePlay size={28} />{" "}
                </div>
                <div
                  title="Like"
                  className="songs-wrapper-details-actions-like"
                  onClick={onClickAddFavorite.bind(this, l.id)}
                >
                  <GoHeartFill
                    style={{
                      color: `${l.isSelected ? "#F55353" : "#5179A3"}`,
                    }}
                    size={24}
                  />
                </div>
                <div className="songs-wrapper-details-actions-name">
                  {l.name}{" "}
                </div>
              </div>
            </div>
            <div className="songs-wrapper-details-artist">{l.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
