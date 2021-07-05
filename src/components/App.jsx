import "../styles/index.scss";
import Equipment from "./Equipment";
import firstAid from "../images/firstAid.png"
import MyState from "./MyState";

const App = () => {
    return (
        <>
            <section className="hero"/>
            <main>
                <section>
                    <h1>Hello</h1>
                </section>
                <img src={firstAid} alt="first aid" width="125"/>
                <Equipment/>
                <MyState/>
            </main>


        </>
    );
};

export default App;
