import * as React from 'react';
import { ITeamsWebPartProps } from './ITeamsWebPartProps';
export interface ITeamsWebPartState {
    titolo: any;
    autore: any;
    prezzo: any;
    numero_pagine: any;
}
export default class TeamsWebPart extends React.Component<ITeamsWebPartProps, ITeamsWebPartState> {
    constructor(props: any);
    componentDidMount(): Promise<void>;
    handleChangeTitolo(event: any): void;
    handleChangeAutore(event: any): void;
    handleChangePrezzo(event: any): void;
    handleChangePagine(event: any): void;
    handleSubmit(event: any): Promise<void>;
    render(): React.ReactElement<ITeamsWebPartProps>;
}
//# sourceMappingURL=TeamsWebPart.d.ts.map