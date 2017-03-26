
import * as React from "react";
import * as ReactDom from "react-dom";
import { connect } from "react-redux";

import { makeMapStateToProps } from "./selectors/MainRootSelector";
interface IMainProps {


};

interface IMainState {


};

class _MainRoot extends React.Component<IMainProps, IMainState> {

    public render() : JSX.Element {
        return <div>STUB MAIN CLIENT</div>;
    }


}

const MainRoot = connect(makeMapStateToProps(), ()=>{},  ()=>{})(_MainRoot as any);

export {
    MainRoot,
};