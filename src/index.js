import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import YTSearch from "youtube-api-search";
import Header from "./components/Header";
import _ from "lodash";
import "./style/style.css";

const API_KEY = "AIzaSyDu7YnyiQuuEtZ4RbgTT8vYy0J2jZk87Lk";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            videos: [],
            selectedVideo: null
        };
        this.videoSearch("ryan dhungel react redux firebase");
    }
    // method
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ videos, selectedVideo: videos[0] });
        });
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        return (
            <div>
                <Header>
                    <SearchBar onSearchTermChange={videoSearch} />
                </Header>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="col-4">
                            <VideoList
                                onVideoSelect={selectedVideo =>
                                    this.setState({ selectedVideo })
                                }
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
