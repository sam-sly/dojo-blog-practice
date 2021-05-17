import { useState } from "react";

const Home = () => {

    //let name = 'Sam';
    const [name, setName] = useState('Sam');
    const [age, setAge] = useState(26);

    const handleClick = () => {
        setName('Coop');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;