import * as React from 'react';
import { Button } from '@douyinfe/semi-ui';


const ComponentList: React.FunctionComponent = () => {
    const handleDragStart = (e: React.DragEvent) => {
    //    e.dataTransfer.setData('index', e.currentTarget.)
    }
    return (
        <div draggable onDragStart={handleDragStart}>
            <Button>图片</Button>
        </div>
    );
}

export default ComponentList;