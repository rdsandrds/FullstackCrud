import React, { Component } from 'react';
import withRouter from "./withRouter";

class HeaderComponents extends Component {

    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="http://github.com/urunov/" className="navbar=brand" >Employee Mangement Applicaton</a>
                        </div>

                    </nav>


                </header>
            </div>
        );
    }
}

export default withRouter(HeaderComponents);