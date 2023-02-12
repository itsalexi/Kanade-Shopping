import './App.css';

function App() {
    return (
        <div className="container">
            <div className="app">
                <div className="nav">
                    <h1>HOME</h1>
                    <div className="title-container">
                        <h1 className="title">KANADE'S</h1>
                        <h1 className="subtitle">STORE</h1>
                    </div>
                    <h1>CART</h1>
                </div>
                <div className="main-content">
                    <div className="main-banner">
                        <img
                            src="https://marketplace.canva.com/EAE6uxzge6c/1/0/1600w/canva-yellow-and-white-minimalist-big-sale-banner-BjBIq-T_6j4.jpg"
                            alt="banner"
                            className="banner-image"
                        />
                    </div>
                    <div className="items">
                        <div className="item-container">
                            <img
                                src="https://i.pinimg.com/564x/a9/d6/fb/a9d6fb9d6fd437fa6c64a9432317f525.jpg"
                                alt="item1"
                                className="item-image"
                            />
                            <h2>Category 1</h2>
                        </div>
                        <div className="item-container">
                            <img
                                src="https://i.pinimg.com/736x/ee/a9/54/eea9546665efa461ac1a2ed8952a7ef3.jpg"
                                alt="item1"
                                className="item-image"
                            />
                            <h2>Category 2</h2>
                        </div>
                        <div className="item-container">
                            <img
                                src="https://i.pinimg.com/736x/a7/6e/3e/a76e3e65a7816327a7ee4d069e6e1ffe.jpg"
                                alt="item1"
                                className="item-image"
                            />
                            <h2>Category 3</h2>
                        </div>
                        <div className="item-container">
                            <img
                                src="https://i.pinimg.com/736x/77/19/5c/77195c5c84246def1833197bb31dd4a1.jpg"
                                alt="item1"
                                className="item-image"
                            />
                            <h2>Category 4</h2>
                        </div>
                        <div className="item-container">
                            <img
                                src="https://i.pinimg.com/564x/ff/53/9d/ff539d088d8601f2659483b6956f8e58.jpg"
                                alt="item1"
                                className="item-image"
                            />
                            <h2>Category 5</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">Made by Alexi</div>
        </div>
    );
}

export default App;
