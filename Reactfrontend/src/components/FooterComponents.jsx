import React, { Component } from 'react';
import withRouter from "./withRouter";



class FooterComponents extends Component {

    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2020 @Urunov Corporation</span>
                </footer>
            </div>
        );
    }
}

export default withRouter(FooterComponents);