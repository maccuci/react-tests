import { useNavigate } from 'react-router-dom';
import Header from './components/Header';

export function Index() {
    const navegate = useNavigate();

    return (
        <div>
            <Header />
        </div>
    )
}