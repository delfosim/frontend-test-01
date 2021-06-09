import * as React from "react";
import { AppBar, Icon, Input, Toolbar } from "@material-ui/core";
import { useStyle } from "./style";
import { Link } from "react-router-dom";
import { useWidgetContext } from "../../shared/context/widgetStore";

const Header: React.FC = () => {
  const classes = useStyle();
  const { searchWidget } = useWidgetContext();

  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    searchWidget(e.target.value.toLowerCase());
  };

  return (
    <AppBar position="sticky" className={classes.header}>
      <Toolbar>
        <Link className={classes.link} to="/">
          <img alt="Delfos" src="./assets/delfos-s.png" />
        </Link>
        <div className={classes.inputRoot}>
          <Input
            classes={{
              input: classes.input,
              underline: classes.inputUnderline,
            }}
            placeholder="Search"
            onChange={handleSearch}
          />
          <Icon classes={{ root: classes.icon }}>search</Icon>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
