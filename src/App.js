import React , {useState , useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/newsCards/NewsCards'

const alanKey = 'ec1bcfa629c0ef9a25fe64f72fcffd2c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles , setNewsArticles ] = useState([]);

    useEffect(() => {
        alanBtn({
            key : alanKey,
            onCommand : ({command , articles}) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        }
        )
    }, []) 
    //The second [] is an dependency array which decides how many times useEffect will be called

    return(
        <div>
            <h1>News Application Powered by Alan AI</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App;