import classes from "./App.module.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

const users = Array(10).fill(null);

function App() {
  return (
    <div className={classes.container}>
      <Navbar />
      <header className={classes.header}>
        Visionvoice <span className={classes.accent}>SMART Contract</span> Challenge
      </header>
      <main className={classes.main}>
        {users.map((user, index) => (
          <Card key={index} index={index + 1} user={user} />
        ))}
      </main>
    </div>
  );
}

export default App;
