import "./featured.scss";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";

export default function Featured({ type }) {
    return (
        <div className="featured">
            { type && (
                <div className="category">
                    <span>{ type === "movie" ? "Movies" : "Series" }</span>
                    <select name="genre" id="genre">
                        <option value="">Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            ) }
            <img src="https://images.pexels.com/photos/2040093/pexels-photo-2040093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
            <div className="info">
                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" alt=""/>
                <span className="desc">
                    Cantare semper ducunt ad barbatus tumultumque.
                    boreas de grandis zeta, carpseris ausus!
                    sunt candidatuses fallere bi-color, velox cottaes.
                    sunt brodiumes imperium barbatus, fidelis assimilatioes.
                    cantare semper ducunt ad barbatus tumultumque.
                    boreas de grandis zeta, carpseris ausus!
                    sunt candidatuses fallere bi-color, velox cottaes.
                    sunt brodiumes imperium barbatus, fidelis assimilatioes.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}