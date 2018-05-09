import React from "react";
import WebGLHome from "./webgl/webgl_Home";
import Button from "../../UI/button/Button";
import ScrollUI from "../../UI/scrollUI/ScrollUI";
import Parallax from "./parallax/parallax";
import { store } from "../../reducers/combinereducers.js";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    LANG: state.LANG,
    WEB_GL: state.WEB_GL,
    HOMESLIDE: state.HOMESLIDE
  };
};

class SectionTitle extends React.Component {

  shouldComponentUpdate()
  {
    return true;
  }

  render() {
    const isWebGlOn = this.props.WEB_GL;
    return (
      <section id="top_slide" key="contentFade">
        <div id="home--canvas">
        {(isWebGlOn && this.props.HOMESLIDE.slide<2) && <WebGLHome />}
        {isWebGlOn===false && (<div className="webglHomebackup"></div>)}
        </div>
        <div id="top_container">
          <div id="logo" />
          <div id="TagLine">{store.getState().LANG.JsonLang.Home.Tagline}</div>
          <div id="title_content">
          <div className="BtnContainer">
            <Button ID="btnTitle" ClickEvent={() => store.dispatch({ type: "MailerOpen" })}>
              {store.getState().LANG.JsonLang.Home.SectionGenesis.BtnDownload}
            </Button>
            </div>
          </div>
        </div>
        <ScrollUI ID="scrollHome" />
        <Parallax />
      </section>
    );
  }
}

export default connect(mapStateToProps)(SectionTitle);
