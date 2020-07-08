//  IMPORTING LIBRARIES
import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import Youtube from "../api/Youtube";
import Logo from "./Logo";
import { Lines } from 'react-preloaders';

//  DEFINING COMPONENT
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const Response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: "<key>"
        
      }
    });
    

    console.log(Response.data.items);

    this.setState({ videos: Response.data.items, selectedVideo: Response.data.items[0] });
  };

  componentDidMount(){
    this.onTermSubmit('kshmr');
  }

  onVideoSelect = async video => {
    await this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  render() {
    return (<div>
                <Lines background="#f7f7f7" time={1800} animation="slide" color={'rgb(158, 38, 102)'}/>
                <div className="ui container">
                  
                  <Logo />
                  <SearchBar onFormSubmit={this.onTermSubmit} />
                  <div className="ui grid">
                    <div className="ui row">
                      <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                      </div>
                      <div className="five wide column">
                        <VideoList
                          onVideoSelect_A={this.onVideoSelect}
                          videos={this.state.videos}
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    );
  }
}

//  EXPORTING COMPONENT
export default App;
