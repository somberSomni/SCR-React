import React from 'react';

var playerSettings = {
        x: 0,
        y: 0,
        height: 25,
        width: 100, //setting will be replaced latter in code
    },
    artist = {
        id: 0,
        summary: "Night Drive's first single from their upcoming self-titled album, out Mid-2017. True to the Night Drive ethos, the song boasts exactly the kind of glossy, echoed Interpol and Lower Dens vibes that are ideal to put on while rocketing down the interstate at 90mph in the dead of night.",
        audio: {
            src: ["audio/Night%20Drive%20-%20Rise%20and%20Fall.wav"],
            type: "audio/wav",
        },
        icon: "icon.jpg",
        imgs: {
            /* seperated by [source] and [settings] for source per object in array*/
            src: ["rf.jpg"],
            settings: [{ position: { x: 0, y: 0} }]
        }
};

class MusicComponent extends React.Component{
    constructor(props){
        super(props);
        this.audioController = null;
        this.allComponents = null;
        this.isActive = false;
        this.state = {
            icon: this.props.glyphicon,
            styler: {
                background: 'black'
            }
        };
    }
    hoverOff(){
        if(this.isActive){
             this.setState({ styler:{ background: 'green'} });
        } else {
            this.setState({ styler:{ background: 'black'} });
        }
    }
    pressed(){
        this.isActive = !this.isActive;
        switch(this.props.type){
            case 'play':
                if(this.state.icon === this.props.glyphicon){
                    this.audioController.play();
                    this.setState({ icon: 'glyphicon-pause'});
                } else{
                    this.audioController.pause();
                    this.setState({ icon: 'glyphicon-play'}); 
                }
                break;
            case 'stop':
                this.audioController.pause();
                this.audioController.currentTime = 0;
                break;
            case 'repeat':
                this.setState({ styler:{ background: 'green' }});
            default:
        }
    }
    componentDidMount(){
        this.audioController = document.querySelector('#audio-controller');
        /*  
            this will grab every player component on the dom 
            so be aware if you put multiple players on site 
                                                            */
        this.allComponents = document.querySelectorAll('.player-components'); 
    }
    render(){
        return (
            <div style={ this.state.styler } className={"player-components "+this.props.type} onMouseOut={(e)=>{ this.hoverOff() } } onMouseOver={ (e)=>{ this.setState({ styler:{ background: 'green'} }); } } onClick={ (e)=>{ this.pressed(); } } >
                 <span className={ "glyphicon "+this.state.icon }></span>
            </div>
        );
    }
}
export class MusicPlayer extends React.Component{
    render(){
        return (
            <div className="player-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <audio id="audio-controller">
                    <source src= { artist.audio.src[0] }/>
                </audio>
                <MusicComponent type="play" glyphicon="glyphicon-play"/>
                <MusicComponent type="stop" glyphicon="glyphicon-stop"/>
                <MusicComponent type="repeat" glyphicon="glyphicon-repeat"/>                
            </div>
        );
    }
}
