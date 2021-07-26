function App() {
    return (
        <div className="container">
        <div className="grid">
        <div className="dis"></div>
        <div className="padButton AC tomato">AC</div>
        <div className="padButton C tomato">C</div>
        <div className="padButton divide">/</div>
        <div className="padButton multiply">x</div>
        <div className="padButton seven dark-gray">7</div>
        <div className="padButton eight dark-gray">8</div>
        <div className="padButton nine dark-gray">9</div>
        <div className="padButton minus">-</div>
        <div className="padButton four dark-gray">4</div>
        <div className="padButton five dark-gray">5</div>
        <div className="padButton six dark-gray">6</div>
        <div className="padButton plus">+</div>
        <div className="padButton one dark-gray">1</div>
        <div className="padButton two dark-gray">2</div>
        <div className="padButton three dark-gray">3</div>
        <div className="padButton equal blue">=</div>
        <div className="padButton zero">0</div>
        <div className="padButton dot">.</div>
        </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));