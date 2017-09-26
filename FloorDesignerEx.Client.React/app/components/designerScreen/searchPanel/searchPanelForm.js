import * as React from 'react';

const SearchPanelForm = () => {

    return (
        <form>
            <formgroup className="designer-toolbar-form-group">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ">
                    <input className="mdl-textfield__input" type="text" id="search-country" value="Poland" readOnly tabIndex="-1" />
                    <label htmlFor="search-country" className="mdl-textfield__label">Country</label>
                    <ul htmlFor="search-country" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                        <li className="mdl-menu__item">Poland</li>
                        <li className="mdl-menu__item">Sweden</li>
                    </ul>
                </div>
            </formgroup>
            <formgroup className="designer-toolbar-form-group">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ">
                    <input className="mdl-textfield__input" type="text" id="search-city" value="Warsaw" readOnly tabIndex="-1" />
                    <label htmlFor="search-city" className="mdl-textfield__label">City</label>
                    <ul htmlFor="search-city" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                        <li className="mdl-menu__item">Warsaw</li>
                        <li className="mdl-menu__item">Stockholm</li>
                    </ul>
                </div>
            </formgroup>
            <formgroup className="designer-toolbar-form-group">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth">
                    <input className="mdl-textfield__input" type="text" id="sample1" value="Office 1, Malborska St. 51" readOnly tabIndex="-1" />
                    <label htmlFor="sample1" className="mdl-textfield__label">Office</label>
                    <ul htmlFor="sample1" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                        <li className="mdl-menu__item">Office 1, Malborska St. 51</li>
                        <li className="mdl-menu__item">Office 2, Szwedzki Pl. 3</li>
                    </ul>
                </div>
            </formgroup>
            <br />
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-long-btn">
                <i className="material-icons">search</i>
                Submit Search
           </button>
        </form>
    )
}

export default SearchPanelForm;