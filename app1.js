const container = document.getElementById("react-container")
ReactDOM.render("Hello !, Wlecome to Musthafa's React",container);


const Container = () => {
    return React.createElement("div",null,"Heyy Welcome to kalvium",
    React.createElement('div',null,"Lets rock and roll using function")
    );
}

const container1 = document.getElementById("react-container")
ReactDOM.render(React.createElement(Container),container1);


class ReactContainer extends React.Component{
    render(){
        return React.createElement("div",null,"Heyy Kalvians",
        React.createElement("div",null,"Lets Rock and roll using class")
        );
    }
}

const container2 = document.getElementById("react-container")
ReactDOM.render(React.createElement(ReactContainer),container2)

