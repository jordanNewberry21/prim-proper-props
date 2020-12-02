import React, { Component } from 'react';
// class
class DinnerSupplies extends Component {
    render() {
        return(
            <div>
                <h2>Dinner Supplies</h2>
                <div>
                    Spoons: {this.props.stuff.length * 2}
                </div>
                <div>
                    Forks: {this.props.stuff.length * 2}
                </div>
                <div>
                    Knives: {this.props.stuff.length * 2}
                </div>
            </div>
        ); // end return
    } // end render
} // end class

// export
export default DinnerSupplies;