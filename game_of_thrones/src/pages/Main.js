import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from './Card';
import './Main.css';
import { useCallback } from 'react';

const GAME_OF_THRONES_URL = 'https://thronesapi.com/api/v2/Characters';
const EMPTY_ARRAY = [];

const Main = () => {
    const [allList, setAllList] = useState(EMPTY_ARRAY);
    const [lastPresentIndex, setLastPresentIndex] = useState(0);
    const loadAllCard = useCallback(async () => {
        const { data } = await axios.get(GAME_OF_THRONES_URL);
        setAllList(data);
        setLastPresentIndex(4);
    }, []);
    const listToPresent = useMemo(() => allList.slice(0, lastPresentIndex), [allList, lastPresentIndex]);
    useEffect(() => {
        loadAllCard();
    }, [loadAllCard]);
    const loadMore = useCallback(() => {
        setLastPresentIndex(prev => prev + 4);
    }, []);
    return (<div className="main-page">
        <Headers text='Game of Thrones'/>
        <div className='card-container'>
            {listToPresent.map(card => <Card key={`card-got-${card.id}`} {...card} />)}
        </div>
        <Footer>
            <Button text='More' disabled={allList.length === listToPresent.length} onClick={loadMore}/>
        </Footer>
    </div>)     
}

export default Main;