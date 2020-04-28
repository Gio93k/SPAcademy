import * as React from 'react';
import {
    ContextualMenuItemType,
    IContextualMenuProps,
    IContextualMenuItem,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ListHelper } from '../../../Helpers/ListHelper';
import { Items } from '@pnp/sp/items';

export default class MenuHeader extends React.Component<{}, { menuItems: any }> {

    constructor(props) {
        super(props)
        this.state = { menuItems: [] };
    }

    public render() {
        return (
            <div >
                <div >
                    <DefaultButton text="Click for ContextualMenu" persistMenu={true}
                        menuProps={{ items: this.state.menuItems.map((val, i) => { return { key: i, text: val.Title, href: val.valore } }) }} />;
                </div>
            </div>);
    }

    public async componentDidMount() {
        const items = await ListHelper.getList()
        this.setState({ menuItems: items });
    }
}
