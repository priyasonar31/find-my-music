import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import Content from "./components/Content/Content";
import { PlayListViewPanel } from "./components/PlayListViewPanel/PlayListViewPanel";
import {
  FavoriteArtistsPanel,
  RecentlyPlayedPanel,
} from "./components/FavoriteArtistsPanel/FavoriteArtistsPanel";

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className="App-contents">
        {/* <SideBar /> */}
        <PlayListViewPanel />
        <Content />
        <div className="App-contents-left-panel">
          <FavoriteArtistsPanel />
          <RecentlyPlayedPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
