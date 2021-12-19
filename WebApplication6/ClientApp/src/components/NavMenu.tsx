import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavMenu.css"
import "./Footer.css"

type State = { ActiveComponent: string }

type Props = {}

export default class NavMenu extends React.PureComponent<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            ActiveComponent: "/"
        };
    }

    public render() {
        return (
            <>
                <header>
                    <div className="headerlogo">
                        <Link to="/" className=""><img className="logo" src="./logo.png" /></Link>
                        <img className="logotext" src="./logo_text.png" />
                    </div>
                    <div className="nav">
                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/" exact> Главная </NavLink>

                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/kitchens">Кухни </NavLink>

                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/hallways"> Прихожие </NavLink>

                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/wardrobes"> Шкафы </NavLink>

                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/serialfurniture"> Серийная мебель </NavLink>

                        <NavLink className="nav-item" activeStyle={{ color: 'white' }} to="/officefurniture"> Офисная мебель </NavLink>
                    </div>
                </header>
                <footer className="footer">
                    <img className="imageCallingFooter" src="./footer_claling.png" />
                    <div className="marginTopFooter"><text className="textFooter">+380661118979</text></div>
                    <img className="logoFooter" src="./footer_logo.png" />
                    <img className="imageInstagramFooter" src="./footer_instagram.png" />
                    <div className="marginTopFooter"><text className="textFooter">_custom_furniture</text></div>
                </footer>
            </>
        );
    }
}
