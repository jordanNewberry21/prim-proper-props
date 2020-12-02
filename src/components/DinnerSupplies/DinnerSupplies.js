import React, { Component } from 'react';
import SilverWare from '../SilverWare.js/SilverWare';
// class
class DinnerSupplies extends Component {
    render() {
        return(
            <div>
                <h2>Dinner Supplies</h2>
                <SilverWare name="Spoons" count={this.props.stuff.length} />
                <SilverWare name="Forks" count={this.props.stuff.length} />
                <SilverWare name="Knives" count={this.props.stuff.length} />
            </div>
        ); // end return
    } // end render
} // end class

// export
export default DinnerSupplies;