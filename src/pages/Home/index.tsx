import * as React from 'react';
import './index.scss';
import ToolBar from '../../components/toolbar';
import ComponentList from '../../components/componentList';


const Home: React.FunctionComponent = () => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }
    return (
        <div className='home'>
            <ToolBar />
            <main>
                <section className='left'>
                    <ComponentList />
                </section>
                <section className='center'>
                    <div className='content' onDragOver={handleDragOver}></div>
                </section>
                <section className='right'></section>
            </main>
        </div>
    );
}

export default Home;