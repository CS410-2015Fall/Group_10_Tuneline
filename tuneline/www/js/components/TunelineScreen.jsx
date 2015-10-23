const React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
});

var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
});

var EmployeeList = React.createClass({
    render: function () {
        return (
            <ul>
                <li>Christophe Coenraets</li>
                <li>Lisa Jones</li>
            </ul>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Employee Directory"/>
                <SearchBar />
                <EmployeeList />
            </div>
        );
    }
});

module.exports = Header;
module.exports = SearchBar;
module.exports = EmployeeList;
module.exports = HomePage;