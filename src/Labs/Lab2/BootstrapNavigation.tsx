import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function BootstrapNavigation() {
    return (
        <div>
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/active">Active</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/link1">Link 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/link2">Link 2</Link>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link disabled">Disabled</span>
                    </li>
                </ul>
            </div>
            <div id="wd-css-navigating-with-cards">
                <h2>
                    Cards
                </h2>
                <div className="card"
                    style={{ width: "18rem" }}>
                    <img src="images/stacked.jpg" alt=""
                        className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                            Stacking Starship
                        </h5>
                        <p className="card-text">
                            Stacking the most powerful rocket in history. Mars or bust!
                        </p>
                        <Link to="/boldly-go" className="btn btn-primary">
                            Boldly Go
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
