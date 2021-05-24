import { GridListTile } from '@material-ui/core';
import React from 'react';
import { Script } from '../../api/memorize';
import ItemList from '../common/ItemList';
import ScriptItem from './ScriptItem';

export type ScriptListProps = {
    scripts : Script[]
}

const ScriptList = ({scripts}:ScriptListProps) => {
    return (
        <ItemList>
            {scripts.map((script) => (
                <GridListTile key={script.id} cols={1}>
                    <ScriptItem script={script}/>
                </GridListTile>
            ))}
        </ItemList>
    );
};

export default ScriptList;