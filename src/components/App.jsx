import "../styles/index.scss";
import Equipment from "./Equipment";
import firstAid from "../images/firstAid.png"

const App = () => {
    return (
        <>
            <section className="hero"/>
            <main>
                <section>
                    <h1>I am React</h1>
                </section>
                <img src={firstAid} alt="first aid" width="125"/>
                <Equipment/>
            </main>


        </>
    );
};

export default App;
