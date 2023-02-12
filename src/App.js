import './App.css';

import model1 from './assets/model1.png';
import model2 from './assets/model2.png';
import model3 from './assets/model3.png';
import model4 from './assets/model4.png';

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
                    <div className="collection unique">
                        <div className="collection-information">
                            <div className="collection-text">
                                <h2 className="collection-title unique">
                                    Unique
                                </h2>
                                <h1 className="collection-subtitle unique">
                                    Collection
                                </h1>
                            </div>
                            <button className="collection-shop-button">
                                SHOP NOW
                            </button>
                        </div>
                        <img
                            src={model1}
                            className="collection-model"
                            alt="model1"
                        />
                    </div>
                    <div className="collection seasonal">
                        <img
                            src={model2}
                            className="collection-model"
                            alt="model2"
                        />
                        <div className="collection-information">
                            <div className="collection-text">
                                <h2 className="collection-title seasonal">
                                    Seasonal
                                </h2>
                                <h1 className="collection-subtitle seasonal">
                                    Collection
                                </h1>
                            </div>
                            <button className="collection-shop-button">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                    <div className="collection casual">
                        <div className="collection-information">
                            <div className="collection-text">
                                <h2 className="collection-title casual">
                                    Casual
                                </h2>
                                <h1 className="collection-subtitle">
                                    Collection
                                </h1>
                            </div>
                            <button className="collection-shop-button">
                                SHOP NOW
                            </button>
                        </div>
                        <img
                            src={model3}
                            className="collection-model"
                            alt="model1"
                        />
                    </div>
                    <div className="collection winter">
                        <img
                            src={model4}
                            className="collection-model"
                            alt="model1"
                        />
                        <div className="collection-information">
                            <div className="collection-text">
                                <h2 className="collection-title winter">
                                    Seasonal
                                </h2>
                                <h1 className="collection-subtitle">
                                    Collection
                                </h1>
                            </div>
                            <button className="collection-shop-button">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">Made by Alexi</div>
        </div>
    );
}

export default App;
