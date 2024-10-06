import ContactList from "./ContactList/ContactList.jsx"
import NavBar from "./NavBar/NavBar.jsx"

const HomeScreen = () => {
    return (
        <>
            <div className="homeScreen" >
                <NavBar />
                <ContactList />
            </div>
        </>
    )
}

export default HomeScreen