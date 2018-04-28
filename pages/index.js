
import React from 'react';
//import THREE from 'three';
//import Orbitcontrols from 'three-orbitcontrols';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import js from '../src/main.js'
import HudHeader from '../components/hud'
import Head from '../components/head'




export default class Threemap extends React.Component {
    constructor(props){
      super(props)
      this.userAgent =  typeof navigator != 'undefined' && navigator.userAgent; //gets navigator.UserAgent at the very very begining!
    }
    componentDidMount() {
      
      document.body.id = 'dataviz'
      /*
      document.body.appendChild(this.createScriptTag('detector', 'text/javascript','detector'))
      document.body.appendChild(this.createScriptTag('Tween', 'text/javascript','tween'))
      //document.body.appendChild(this.createScriptTag('datguicontrol', 'text/javascript','datguicontrol'))
      //const jqueryui = require('jquery-ui')
      //const visualizeLines = require('../static/visualize-lines')
      document.body.appendChild(this.createScriptTag('THREEx.KeyboardState', 'text/javascript','threexKeyboardState'))
      document.body.appendChild(this.createScriptTag('THREEx.WindowResize', 'text/javascript','threexWindowResize'))
      document.body.appendChild(this.createScriptTag('Stats', 'text/javascript','stats'))
      document.body.appendChild(this.createScriptTag('RequestAnimationFrame', 'text/javascript','requestAnimationFrame'))
      document.body.appendChild(this.createScriptTag('ShaderExtras', 'text/javascript','ShaderExtras'))
      //document.body.appendChild(this.createScriptTag('canvg', 'text/javascript','canvg'))
      document.body.appendChild(this.createScriptTag('rgbcolor', 'text/javascript','rgbcolor')) //!
      document.body.appendChild(this.createScriptTag('innersvg', 'text/javascript','innersvg')) 
      document.body.appendChild(this.createScriptTag('util', 'text/javascript','util')) 
      document.body.appendChild(this.createScriptTag('mousekeyboard', 'text/javascript','mousekeyboard')) 
      document.body.appendChild(this.createScriptTag('datguicontrol', 'text/javascript','datguicontrol')) 
      document.body.appendChild(this.createScriptTag('dataloading', 'text/javascript','dataloading')) 
      document.body.appendChild(this.createScriptTag('camerastates', 'text/javascript','camerastates'))
      document.body.appendChild(this.createScriptTag('geopins', 'text/javascript','geopins'))*/
      //document.body.appendChild(this.createScriptTag('visualize', 'text/javascript','visualize'))

      //document.body.appendChild(this.createScriptTag('markers', 'text/javascript','markers'))
      //document.body.appendChild(this.createScriptTag('svgtoy', 'text/javascript','svgtoy'))
      //document.body.appendChild(this.createScriptTag('d3.v2.min', 'text/javascript','d3')) 
      document.body.appendChild(this.createScriptTag('ui.controls', 'text/javascript','uiControls'))
      document.body.onload = () => start()
      /*const vertexshader = document.createElement('script');
      const fragmentshader = document.createElement('script');
      const globeVertexShader = document.createElement('script');
      const globeFragmentShader = document.createElement('script');
      vertexshader.type = 'x-shader/x-vertex';
      fragmentshader.type = 'x-shader/x-vertex';
      globeVertexShader.type = 'x-shader/x-vertex';
      vertexshader.src = "../src/vertexshader.js";
      fragmentshader.src = "../src/fragmentshader.js";
      globeVertexShader.src = "../src/globeVertexShader.js";
      globeFragmentShader.src = "../src/globeFragmentShader.js";
      vertexshader.async = true;
      fragmentshader.async = true;
      globeVertexShader.async = true;
      globeFragmentShader.async = true;
      document.body.appendChild(vertexshader);
      document.body.appendChild(fragmentshader);
      document.body.appendChild(globeVertexShader);
      document.body.appendChild(globeFragmentShader);*/
      
     
    }
  
    createScriptTag = (name, type, id) => {
      const script = document.createElement('script')
      script.type = type
      script.src = '../static/' + name + '.js'
      script.async = true
      return script     
    }

    render(){
      /* about the scripts:
         visualize.js and ui.controls.js shows the vertical statistical lines 
         IN VISUALIZE.JS YOU MUST CHANGE SOME STATIC IMAGES URL!!
         IN ui.controls.JS YOU MUST CHANGE SOME STATIC IMAGES URL!!
         */
     
      return <div id="wrapper">
               <Head title='visualizator' />
                <div id="loading">
                    <h2>{'Loading Small Arms and Ammunition Trade Data from 1992 to 2010. Please wait...'}</h2>
                </div>

              <div >
                  <table id="marker_template" className="marker" style={{left:'0px', top:'0px'}}><tr><td><span id="countryText" className="country">
                  </span></td><td className="detail" id="detailText">
                  </td></tr></table>
              </div>

              <div id="visualization" >
                  <div id="glContainer">
                  </div>
              </div>
              
             <HudHeader />
             <script src="../static/detector.js"></script>
		<script src="../static/Tween.js"></script>
		<script src="../static/dat.gui.min.js"></script>
             <script src="../static/Three.js"></script>
             <script src="../static/THREEx.KeyboardState.js"></script>
		     <script src="../static/THREEx.WindowResize.js"></script>
		     <script src="../static/Stats.js"></script>
             <script src="../static/jquery-1.7.1.min.js"></script>
              <script src="../static/jquery-ui-1.8.21.custom.min.js"></script>
              <script src="../static/RequestAnimationFrame.js"></script>
		      <script src="../static/ShaderExtras.js"></script>
             <script src="../static/canvg.js"></script>
		<script src="../static/rgbcolor.js"></script>
		<script src="../static/innersvg.js"></script>
<script src="../static/util.js"></script>
		<script src="../static/mousekeyboard.js"></script>
		<script src="../static/datguicontrol.js"></script>
		<script src="../static/dataloading.js"></script>
		<script src="../static/camerastates.js"></script>
		<script src="../static/geopins.js"></script>
           
              <script src="../static/visualize.js"></script>
              <script src="../static/visualize-lines.js"></script>
                <script src="../static/markers.js"></script>
		  <script src="../static/svgtoy.js" type="text/javascript"></script>
             <script src="../static/d3.v2.min.js"></script>
           
             <script src="../static/vertexshader.js" type='x-shader/x-vertex' id="vertexshader"></script>
              <script src="../static/fragmentshader.js" type='x-shader/x-fragment' id="fragmentshader"></script>
               <script src="../static/globeVertexShader.js" type='x-shader/x-vertex' id="globeVertexShader"></script>
                <script src="../static/globeFragmentShader.js" type='x-shader/x-fragment' id="globeFragmentShader"></script>
                  
                <script src="../static/main.js" id="main"></script>
            </div>

    }
} 

