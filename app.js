class App extends React.Component {
    state = {
        active: true,
    }
    handleSwitch = () => {
        this.setState({
            active: !this.state.active,
        })
    }
    render() {
        return (
            <div>
                <SwitchButton handleSwitch={this.handleSwitch} active={this.state.active} />
                {this.state.active && <Timer />}
            </div>
        )
    }
}

const SwitchButton = (props) => {

    return (
        <button onClick={props.handleSwitch} >{props.active ? "Turn off" : "Turn on"}</button>
    )
}




class Timer extends React.Component {
    intervalIndex = 0;
    state = {
        time: this.getTime(),
    }

    getTime() {
        const time = new Date();
        return ({
            seconds: time.getSeconds(),
            minutes: time.getMinutes(),
            hours: time.getHours(),
        })
    }

    setTime = () => {
        const time = this.getTime();
        this.setState({
            time: time,
        })
    }

    componentDidMount() {
        this.intervalIndex = setInterval(this.setTime, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalIndex)
    }
    
    showZero(unit){
        return unit < 10 ? "0" + unit : unit
    }

    render() {
        const { seconds, minutes, hours } = this.state.time;

        return (
            <div>{this.showZero(hours)}:{this.showZero(minutes)}:{this.showZero(seconds)}</div>
        )
    }
}
















ReactDOM.render(<App />, document.getElementById("root"))